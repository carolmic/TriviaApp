import Header from '@/components/Header';
import QuizCard from '@/components/QuizCard';
import { Flex, Grid } from '@radix-ui/themes';
import { useRouter } from 'next/router';

const quizzes = [
  {
    category: 'General Knowledge',
    id: 9,
    backgroundImage: '/general_knowledge.jpg'
  }, 
  {
    category: 'Books',
    id: 10,
    backgroundImage: '/books.jpg'
  }, 
  {
    category: 'Films',
    id: 11,
    backgroundImage: '/film.jpg'
  }, 
  {
    category: 'Music',
    id: 12,
    backgroundImage: '/music.jpg'
  }, 
  {
    category: 'Musicals & Theatres',
    id: 13,
    backgroundImage: '/theatre.jpg'
  },
  {
    category: 'Television',
    id: 14,
    backgroundImage: '/television.jpg'
  },
  {
    category: 'Video Games',
    id: 15,
    backgroundImage: '/video_games.jpg'
  },
  {
    category: 'Board Games',
    id: 16,
    backgroundImage: '/board_games.jpg'
  },
  {
    category: 'Science & Nature',
    id: 17,
    backgroundImage: '/nature.jpg'
  },
  {
    category: 'Computers',
    id: 18,
    backgroundImage: '/computers.jpg'
  },
  {
    category: 'Math',
    id: 19,
    backgroundImage: '/mathematics.jpg'
  }
];

export default function MyApp() {
  const router = useRouter();
  return (
    <Flex direction="column" gap="2">
      <Header />
      <Grid columns="4" rows="repeat(2, 15rem)" width="50%">
        {quizzes.map((quiz, index) => (
          <QuizCard key={index} category={quiz.category} backgroundImage={quiz.backgroundImage} onClick={() => router.push(`/quiz/${quiz.id}`)}/>
        ))}
      </Grid>
    </Flex>
  );
}
