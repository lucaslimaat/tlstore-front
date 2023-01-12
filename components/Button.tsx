import { FC } from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react'
import { colors } from '../public/styles/colors';
import { Montserrat } from '@next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], weight: '700'})

const ButtonSite: FC = () => {
    return(
        <Button
            className={montserrat.className}
            backgroundColor={colors.fullblack}
            width="386px"
            height= "53px"
            color={colors.white}
            fontSize="24px"
        > Confira todos os detalhes </Button>
    )
}

export default ButtonSite;