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
	console.log(quizData, "quizData");
	const [currentQuestion, setCurrentQuestion] = useState<Question>(quizData.quizData[0]);
	const [answer, setAnswer] = useState<string>("");

	useEffect(() => {
    if (answer !== "") {
      setCurrentQuestion(quizData.quizData[1]);
    }
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
				</Flex>
			</ul>
		</Box>
	);
}
