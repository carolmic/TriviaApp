import { Button } from "@radix-ui/themes";

interface QuizButtonProps {
	onClick?: () => void;
	children: React.ReactNode;
}
export default function QuizButton(props: QuizButtonProps) {
	return ( 
    <Button onClick={props.onClick} style={{ border: '1px solid #1D4ED8' }} className="!bg-white !w-auto !rounded-md !text-gray-600 hover:!bg-slate-50">
      {props.children}
    </Button>
  );
}