import { FC, useState } from 'react';
import { colors } from '../public/styles/colors';
import { Input } from '@chakra-ui/react'

const InputField: FC = () => {

    const [search, setSearch] = useState("");

    console.log(search);

    return(
        <Input 
            placeholder='Digite o que procura' 
            type="search" 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
            width="790px"
        />
    )
}

export default InputField;


