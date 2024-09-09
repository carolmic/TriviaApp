import Header from '@/components/Header';
import QuizCard from '@/components/QuizCard';
import { Button, Flex } from '@radix-ui/themes';
import { useRouter } from 'next/router';

export default function MyApp() {
  const router = useRouter();
  return (
    <Flex direction="column" gap="2">
      <Header />
      <Button onClick={() => router.push('/quiz')}>Start Quiz</Button>
      <QuizCard category="General Knowledge" backgroundImage="https://avatars.githubusercontent.com/u/151643887?v=4" />
    </Flex>
  );
}
