import Question from "@/components/Question";
import TsParticles from "@/components/TsParticles";
import { Button, Flex } from "@radix-ui/themes";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type Question = {
	category: string;
	correct_answer: string;
	difficulty: string;
	incorrect_answers: string[];
	question: string;
	type: string;
};

type QuizData = {
	quizData: Question[];
};

//eslint-disable-next-line
export async function getServerSideProps(context: any) {
	const { id } = context.query;
	const res = await fetch(
		`https://opentdb.com/api.php?amount=10&category=${id}&difficulty=medium&type=multiple`
	);
	const data = await res.json();

	data.results.forEach((question: Question) => {
		if (question.question.includes("&quot;")) {
			question.question = question.question.replace(/&quot;/g, '"');
		}
		if (question.question.includes("&#039;")) {
			question.question = question.question.replace(/&#039;/g, "'");
		}
		if (question.question.includes("&amp;")) {
			question.question = question.question.replace(/&amp;/g, "&");
		}
		question.incorrect_answers.forEach((answer: string, index: number) => {
			if (answer.includes("&quot;")) {
				question.incorrect_answers[index] = answer.replace(/&quot;/g, '"');
			}
			if (answer.includes("&#039;")) {
				question.incorrect_answers[index] = answer.replace(/&#039;/g, "'");
			}
			if (answer.includes("&amp;")) {
				question.incorrect_answers[index] = answer.replace(/&amp;/g, "&");
			}
		});
		if (question.correct_answer.includes("&quot;")) {
			question.correct_answer = question.correct_answer.replace(/&quot;/g, '"');
		}
		if (question.correct_answer.includes("&#039;")) {
			question.correct_answer = question.correct_answer.replace(/&#039;/g, "'");
		}
		if (question.correct_answer.includes("&amp;")) {
			question.correct_answer = question.correct_answer.replace(/&amp;/g, "&");
		}
	});

	return {
		props: { quizData: data.results },
	};
}

export default function Quiz(quizData: QuizData) {
	const [questionIndex, setQuestionIndex] = useState<number>(0);
	const [currentQuestion, setCurrentQuestion] = useState<Question>(
		quizData.quizData[questionIndex]
	);
	const [answer, setAnswer] = useState<string>("");
	const [score, setScore] = useState<number>(0);
	const [questionNumber, setQuestionNumber] = useState<number>(1);
	const [isFinished, setIsFinished] = useState<boolean>(false);
	const router = useRouter();

	const handleAnswer = (answer: string) => {
		if (answer !== "") {
			if (answer === currentQuestion.correct_answer) {
				setScore(score + 1);
			}
		}
	};

	const handleNextQuestion = () => {
		const nextIndex = questionIndex + 1;
		if (nextIndex < quizData.quizData.length) {
			setQuestionIndex(nextIndex);
			setCurrentQuestion(quizData.quizData[nextIndex]);
			setQuestionNumber(questionNumber + 1);
		} else {
			console.log("Quiz finished!");
			setIsFinished(true);
		}
	};

	useEffect(() => {
		handleAnswer(answer);
	}, [answer]);

	return (
		<Flex className="flex-col w-full h-screen items-center !justify-center gap-4 overflow-hidden">
			<TsParticles />
			{isFinished ? (
				<>
					<h1 className="font-bold z-10 text-violet-900 text-xl">Quiz Finished!</h1>
					<h2 className="font-bold z-10 text-gray-600 text-md">
						Your score is {score} out of {quizData.quizData.length}
					</h2>
					<Button className="!z-10 !w-1/4 !bg-violet-400 !cursor-pointer" onClick={() => router.push('/')}>Back to Home</Button>
				</>
			) : (
				<>
					<h1 className="font-bold z-10 text-violet-900">
						Question {questionNumber} of {quizData.quizData.length}
					</h1>
					<Question
						title={currentQuestion!.question}
						incorrect_answers={currentQuestion!.incorrect_answers}
						correct_answer={currentQuestion!.correct_answer}
						answer={answer}
						setAnswer={setAnswer}
						handleNextQuestion={handleNextQuestion}
					/>
				</>
			)}
		</Flex>
	);
}
