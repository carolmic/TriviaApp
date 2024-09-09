import Header from '@/components/Header';
import QuizCard from '@/components/QuizCard';
import TsParticles from '@/components/TsParticles';
import { Flex, Grid } from '@radix-ui/themes';
import { useRouter } from 'next/router';

const quizzes = [
  {
    category: 'General Knowledge',
    id: 9,
    backgroundImage: '/images/general_knowledge.jpg'
  }, 
  {
    category: 'Books',
    id: 10,
    backgroundImage: '/images/books.jpg'
  }, 
  {
    category: 'Films',
    id: 11,
    backgroundImage: '/images/film.jpg'
  }, 
  {
    category: 'Music',
    id: 12,
    backgroundImage: '/images/music.jpg'
  }, 
  {
    category: 'Musicals & Theatres',
    id: 13,
    backgroundImage: '/images/theatre.jpg'
  },
  {
    category: 'Television',
    id: 14,
    backgroundImage: '/images/television.jpg'
  },
  {
    category: 'Video Games',
    id: 15,
    backgroundImage: '/images/video_games.jpg'
  },
  {
    category: 'Board Games',
    id: 16,
    backgroundImage: '/images/board_games.jpg'
  },
  {
    category: 'Science & Nature',
    id: 17,
    backgroundImage: '/images/nature.jpg'
  },
  {
    category: 'Computers',
    id: 18,
    backgroundImage: '/images/computers.jpg'
  },
  {
    category: 'Math',
    id: 19,
    backgroundImage: '/images/mathematics.jpg'
  },
  {
    category: 'Mythology',
    id: 20,
    backgroundImage: '/images/mythology.jpg'
  }
];

export default function MyApp() {
  const router = useRouter();
  return (
    <>
    <TsParticles /> 
    <Flex direction="column" gap="8" className='items-center justify-center'>
      <Header />
      <Grid columns="4" rows="repeat(2, 15rem)" width="50%">
        {quizzes.map((quiz, index) => (
          <QuizCard key={index} category={quiz.category} backgroundImage={quiz.backgroundImage} onClick={() => router.push(`/quiz/${quiz.id}`)}/>
        ))}
      </Grid>
    </Flex>
    </>
  );
}
