import { Button } from "@radix-ui/themes";
import { useEffect, useState } from "react";

interface QuestionProps {
	title: string;
	incorrect_answers: string[];
	correct_answer: string;
	answer: string;
	setAnswer: (answer: string) => void;
}

export default function Question(props: QuestionProps) {
	const incorrectAnswers = props.incorrect_answers;
	const correctAnswer = props.correct_answer;
	const [answers, setAnswers] = useState<string[]>([]);
	answers?.push(correctAnswer);
	incorrectAnswers.forEach((answer: string) => {
		answers?.push(answer);
	});

	const shuffleArray = (array: string[]) => {
		for (let i = array.length - 1; i >= 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	};

	const handleAnswer = (answer: string) => {
		props.setAnswer(answer);
	};

	useEffect(() => {
		const allAnswers = [...incorrectAnswers, correctAnswer];
		setAnswers(shuffleArray(allAnswers));
	}, []);

	return (
		<>
			<h2>{props.title}</h2>
			<ul className="flex flex-col w-1/2 gap-2">
				{answers?.slice(0, 4).map((answer: any, index) => (
					<Button key={index} onClick={() => handleAnswer(answer)}>
						{answer}
					</Button>
				))}
			</ul>
		</>
	);
}