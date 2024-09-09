import { Flex } from "@radix-ui/themes";

export default function Header() {
	return (
		<Flex className="justify-center items-center gap-1 z-10">
			<img className="w-10" src="/images/puzzle.svg" alt="Trivia App" />
			<h1 className="text-xl font-bold">Trivia App</h1>
		</Flex>
	);
}
