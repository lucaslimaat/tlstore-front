import { Box, Flex} from '@chakra-ui/react';
import type { NextPage } from 'next';

const Cart: NextPage = () => {
  return (
    <>
    <Box display="flex" alignItems="center" justifyContent="space-between">
  Box with Flex props
</Box>


<Flex align="center" justify="center">
  Flex Container
</Flex>
</>
  );
};

export default Cart;