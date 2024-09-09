import Question from "@/components/Question";
import { Box, Flex } from "@radix-ui/themes";
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

export async function getServerSideProps() {
	const res = await fetch(
		"https://opentdb.com/api.php?amount=10&category=22&type=multiple"
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
		<Box>
			<h1>Quiz</h1>
			<ul>
				<Flex className="flex-col">
					<Question
						title={currentQuestion!.question}
						incorrect_answers={currentQuestion!.incorrect_answers}
						correct_answer={currentQuestion!.correct_answer}
						answer={answer}
						setAnswer={setAnswer}
					/>
					<p>Score: {score}</p>
				</Flex>
			</ul>
		</Box>
	);
}
