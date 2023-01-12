import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';
import ButtonSite from '../../components/Button';
import { colors } from '../../public/styles/colors';

const Home: NextPage = () => {
  return (
    <Box w="100%">
      testes 
      <ButtonSite></ButtonSite>
    </Box>
  );
};

export default Home;