import { Box } from "@radix-ui/themes";
import { useEffect, useRef, useState } from "react";

interface QuizCardProps {
	category?: string;
	backgroundImage: string;
	onClick?: () => void;
}

export default function QuizCard(props: QuizCardProps) {
	const [isInView, setIsInView] = useState(false);
	const cardRef = useRef<HTMLDivElement>(null);

	//Implementing lazy load to improve img loading performance
	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsInView(true);
					observer.disconnect();
				}
			},
			{
				rootMargin: "100px",
			}
		);

		if (cardRef.current) {
			observer.observe(cardRef.current);
		}

		return () => {
			if (cardRef.current) {
				observer.unobserve(cardRef.current);
			}
		};
	}, []);

	return (
		<Box
			ref={cardRef}
			className="w-44 h-44 relative z-0 bg-cover bg-center rounded-lg shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300 ease-in-out"
			style={{
				backgroundImage: isInView ? `url(${props.backgroundImage})` : "none", // Only load the background image when it's in view
			}}
			onClick={props.onClick}
		>
			<Box className="w-3/4 h-1/4 p-4 bg-gray-200 absolute z-10 bg-transparent absolute top-14 right-6">
				<h2 className="text-base font-bold text-center text-white shadow-xs">
					{props.category}
				</h2>
			</Box>
		</Box>
	);
}
