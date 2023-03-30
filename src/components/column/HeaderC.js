import { Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

function HeaderC() {
    return (
        <Flex display='flex' flexDir='column' justifyContent='center'
            alignItems='flex-start' gap='32px' padding='0px' flex='none' order='0' alignSelf='center' flex-grow='0'>
            <Heading flex='none' flexGrow='0' order='0' color='#1A202C' fontSize='36px' fontWeight='800' lineHeight='111%'>
                Let's Connect
            </Heading>
            <Text flex='none' flexGrow='0' order='1' alignSelf='stretch' color='#4A5568' fontWeight='400' fontSize='20px' lineHeight='140%'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla augue ex, iaculis non magna sit amet, posuere fermentum magna. Praesent tempus risus mauris, ac pharetra mi sagittis id.
            </Text>
        </Flex>
    )
}

export default HeaderC