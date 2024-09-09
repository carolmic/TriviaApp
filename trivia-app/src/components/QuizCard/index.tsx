import { Box } from "@radix-ui/themes";

interface QuizCardProps {
  category?: string;
  backgroundImage: string;
  onClick?: () => void;
}

export default function QuizCard(props: QuizCardProps) {
  return (
    <Box className="w-44 h-44 relative z-0 bg-cover bg-center rounded-lg shadow-lg" style={{ backgroundImage: `url(${props.backgroundImage})` }} onClick={props.onClick}>
      <Box className="w-3/4 h-1/4 p-4 bg-gray-200 absolute z-10 bg-transparent absolute top-14 right-6">
        <h2 className="text-base font-bold text-center text-white shadow-xs">{props.category}</h2>
      </Box>
    </Box>
  )
}