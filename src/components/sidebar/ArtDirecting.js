import { Flex, Heading } from '@chakra-ui/react'

import React from 'react'
import SimpleCardA from './SimpleCardA'

function ArtDirecting() {
  return (
    <Flex display='flex' flexDir='column' alignItems='center' gap='12px' flex='none' order='1' alignSelf='stretch' flexGrow='0'>
        <Heading display='flex' alignSelf='stretch' alignItens='center' fontWeight='700' fontSize='18px' lineHeight='156%'> Art Directing</Heading>
        <SimpleCardA/>
    </Flex>
  )
}

export default ArtDirecting