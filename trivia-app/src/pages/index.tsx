import Header from '@/components/Header';
import { Flex } from '@radix-ui/themes';

export default function MyApp() {
  return (
    <Flex direction="column" gap="2">
      <Header />
    </Flex>
  );
}
