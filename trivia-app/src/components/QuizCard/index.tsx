import { Box } from "@radix-ui/themes";

interface QuizCardProps {
  category: string;
  backgroundImage: string;
}

export default function QuizCard(props: QuizCardProps) {
  return (
    <Box className="w-44 h-96 ">
      <Box className="w-full h-3/4 bg-cover bg-center" style={{ backgroundImage: `url(${props.backgroundImage})` }} />
      <Box className="w-full h-1/4 p-4 bg-gray-200">
        <h2 className="text-lg font-bold">{props.category}</h2>
      </Box>
    </Box>
  )
}