import { Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import SimpleCardC from './SimpleCardC'

function Commitment() {
    return (
        <Flex display='flex' flexDir='column' alignItems='center' gap='12px' flex='none' order='0' alignSelf='stretch' flexGrow='0'>
            <Heading display='flex' alignSelf='stretch' alignItens='center' fontWeight='700' fontSize='18px' lineHeight='156%' >
                Our Commitment
            </Heading>
            <SimpleCardC >oie</SimpleCardC>
        </Flex>
    )
}

export default Commitment