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
  },
  {
    category: 'Sports',
    id: 21,
    backgroundImage: '/images/sports.jpg'
  }, 
  {
    category: 'Geography',
    id: 22,
    backgroundImage: '/images/geography.jpg'
  },
  {
    category: 'History',
    id: 23,
    backgroundImage: '/images/history.jpg'
  },
  {
    category: 'Politics', 
    id: 24,
    backgroundImage: '/images/politics.jpg'
  },
  {
    category: 'Art',
    id: 25,
    backgroundImage: '/images/art.jpg'
  },
  {
    category: 'Celebrities',
    id: 26,
    backgroundImage: '/images/celebrities.jpg'
  },
  {
    category: 'Animals',
    id: 27,
    backgroundImage: '/images/animals.jpg'
  },
  {
    category: 'Vehicles',
    id: 28,
    backgroundImage: '/images/vehicles.jpg'
  }
];

export default function MyApp() {
  const router = useRouter();
  return (
    <>
    <TsParticles /> 
    <Flex direction="column" gap="8" className='items-center justify-center'>
      <Header />
      <Grid columns="4" rows="repeat(4, 15rem)" width="50%">
        {quizzes.map((quiz, index) => (
          <QuizCard key={index} category={quiz.category} backgroundImage={quiz.backgroundImage} onClick={() => router.push(`/quiz/${quiz.id}`)}/>
        ))}
      </Grid>
    </Flex>
    </>
  );
}
