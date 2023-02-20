import { Grid, Box, Text, Center, Button } from "@chakra-ui/react";
import type { GetServerSideProps, NextPage } from 'next';
import { Josefin_Sans, Montserrat } from "@next/font/google";
import InputFieldForm from "../components/InputFieldForm";
import { colors } from "../public/styles/colors";
import { FcGoogle } from 'react-icons/fc';
import { getSession, signIn} from 'next-auth/react';

const montserrat = Montserrat({ subsets: ['latin'], weight: '700'})
const josefin_sans = Josefin_Sans({ subsets: ['latin'], weight: '700'})

const Auth: NextPage = () => {
  return (
    <Grid w="100%" h="80vh" >
      <Center>
        <Box>
          <Text className={josefin_sans.className} 
                fontSize='50px' 
                color='black'
          >
            INICIAR SESSÃO
          </Text>
          
        </Box>
      </Center>
      <Center>
        <Box>
          <Text>Email</Text>
          <InputFieldForm></InputFieldForm>
        </Box>
      </Center>
      <Center>
        <Box>
          <Text>Senha</Text>
          <InputFieldForm></InputFieldForm>
          <Text textAlign="end" fontWeight="700">Esqueceu a senha?</Text>
        </Box>
      </Center>
      <Center>
        <Box>
          <Button
              className={montserrat.className}
              backgroundColor={colors.fullblack}
              width="790px"
              height= "65px"
              color={colors.white}
              fontSize="24px"
              borderRadius="0px"
          > 
            INICIAR SESSÃO 
          </Button>
        </Box>
      </Center>    
      <Center>
        <Box>
          <Text fontWeight="700">Não possue uma conta?</Text>
        </Box>
      </Center>
      <Center>
        <Box>
          <Button
              className={montserrat.className}
              backgroundColor={colors.fullblack}
              width="790px"
              height= "65px"
              color={colors.white}
              fontSize="24px"
              borderRadius="0px"
          > 
            CRIAR UMA CONTA
          </Button>
        </Box>
      </Center>
      <Center display="flex" justifyContent="center">
        <Text margin="20px">Ou entre com </Text>
        <Button
          backgroundColor={colors.fullblack}
          color={colors.white}
          borderRadius="0"
          leftIcon={<FcGoogle />}
          onClick={() => signIn('google')}
        >
            Google
        </Button> 
      </Center>   
    </Grid>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if(session) {
    return {
      redirect: {
        destination: '/Home',
        permanent: false 
      }
    }
  }

  return {
    props: { session }
  }
}

export default Auth;

