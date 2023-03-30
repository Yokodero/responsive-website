import { Flex } from '@chakra-ui/react'
import React from 'react'
import HeaderC from './HeaderC'
import MainForm from './MainForm'

function Column() {
    return (
        <Flex display='flex' flexDir='column' alignItems='center' gap='32px'>
            <HeaderC />
            <MainForm />
        </Flex>
    )
}

export default Column