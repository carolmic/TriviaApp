import { Button, Flex } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import QuizButton from "../Button";

interface QuestionProps {
	title: string;
	incorrect_answers: string[];
	correct_answer: string;
	answer: string;
	setAnswer: (answer: string) => void;
	handleNextQuestion: () => void;
	handlePreviousQuestion: () => void;
}

export default function Question(props: QuestionProps) {
	const incorrectAnswers = props.incorrect_answers;
	const correctAnswer = props.correct_answer;
	const [answers, setAnswers] = useState<string[]>([]);
	answers?.push(correctAnswer);
	incorrectAnswers.forEach((answer: string) => {
		answers?.push(answer);
	});
	const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

	const shuffleArray = (array: string[]) => {
		for (let i = array.length - 1; i >= 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	};

	const handleAnswer = (answer: string) => {
		setSelectedAnswer(answer);
		props.setAnswer(answer);
	};

	useEffect(() => {
		const allAnswers = [...incorrectAnswers, correctAnswer];
		setAnswers(shuffleArray(allAnswers));
		setSelectedAnswer(null);
	}, [props.title]);

	const getButtonBgColor = (answer: string) => {
		if (!selectedAnswer) return "!bg-white hover:!bg-slate-50"; // Default button color before selection
		if (answer === correctAnswer && selectedAnswer === answer) return "!bg-green-300 hover:!bg-green-400"; // Correct answer
		if (answer !== correctAnswer && selectedAnswer === answer) return "!bg-red-300 hover:!bg-red-400"; // Incorrect answer
		if (answer === correctAnswer) return "!bg-green-300 hover:!bg-green-400"; // Show correct answer if already selected
		return "!bg-white hover:!bg-slate-50"; // Unselected answers
	};


	return (
		<Flex className="flex-col gap-8 z-10 w-full items-center">
			<h2>{props.title}</h2>
			<ul className="flex flex-col w-1/2 gap-2">
				{answers?.slice(0, 4).map((answer: string, index) => (
					<QuizButton key={index} onClick={() => handleAnswer(answer)} className={`${getButtonBgColor(answer)}`}>
						{answer}
					</QuizButton>
				))}
			</ul>
			<Flex className="w-1/2 !justify-center gap-4">
				<Button className="!w-1/4 !bg-violet-400" onClick={props.handlePreviousQuestion}>Previous Question</Button>
				<Button className="!w-1/4 !bg-violet-400" onClick={props.handleNextQuestion}>
					Next Question
				</Button>
			</Flex>
		</Flex>
	);
}
