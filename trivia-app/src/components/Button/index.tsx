import { Button } from "@radix-ui/themes";

interface QuizButtonProps {
	onClick?: () => void;
	children: React.ReactNode;
  className?: string;
}
export default function QuizButton(props: QuizButtonProps) {
	return ( 
    <Button onClick={props.onClick} style={{ border: '1px solid #1D4ED8' }} className={`${props.className} !h-1/4 !w-auto !rounded-md !text-gray-600 !cursor-pointer`} >
      {props.children}
    </Button>
  );
}
