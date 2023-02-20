import { Text, Button } from "@chakra-ui/react";
import { useSession, signIn, signOut } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { colors } from "../../public/styles/colors";

function Home() {
  const {data: session} = useSession()

  if (session) {
    return (<>
      <Text> {session?.user?.name} </Text>
      <button onClick={() => signOut()}> Sair </button>
    </>
    )
    
  } else {
    return ( <Button
      backgroundColor={colors.fullblack}
      color={colors.white}
      borderRadius="0"
      leftIcon={<FcGoogle />}
      onClick={() => signIn("google")}
    >
      Google
    </Button>
    )
  }
}

export default Home;
