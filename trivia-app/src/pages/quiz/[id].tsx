import Question from "@/components/Question";
import { Flex } from "@radix-ui/themes";
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

export async function getServerSideProps(context: any) {
	const { id } = context.query;
	const res = await fetch(
		`https://opentdb.com/api.php?amount=10&category=${id}&type=multiple`
	);
	const data = await res.json();

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

	const handleAnswer = (answer: string) => {
		if (answer !== "") {
			const nextIndex = questionIndex + 1;
			if (answer === currentQuestion.correct_answer) {
				setScore(score + 1);
			}
			if (nextIndex < quizData.quizData.length) {
				setQuestionIndex(nextIndex);
				setCurrentQuestion(quizData.quizData[nextIndex]);
			} else {
				console.log("Quiz finished!");
			}
		}
	};

	useEffect(() => {
		handleAnswer(answer);
	}, [answer]);

	return (
		<Flex className="flex-col w-full h-screen items-center justify-center">
			<Question
				title={currentQuestion!.question}
				incorrect_answers={currentQuestion!.incorrect_answers}
				correct_answer={currentQuestion!.correct_answer}
				answer={answer}
				setAnswer={setAnswer}
			/>
		</Flex>
	);
}