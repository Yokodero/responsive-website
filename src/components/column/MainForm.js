import { Button, Flex } from '@chakra-ui/react'
import React, { Component } from 'react'
import FirstRow from './formComponents/FirstRow'
import SecondRow from './formComponents/SecondRow'
import Subject from './formComponents/Subject'
import YourMessage from './formComponents/YourMessage'

export class MainForm extends Component {
    render() {
        return (
            <Flex bg='white' boxShadow='0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)'
                display='flex' flexDir='column' alignItems='flex-start' padding='32px' gap='32px'
                borderRadius='8px' flex='none' order='1' alignSelf='stretch' flexGrow='0'>
                <FirstRow />
                <SecondRow />
                <Subject />
                <YourMessage />
                <Button color = 'white' padding='10px 24px' flexDir='row' display='flex' justifyContent='center' alignItems='center' gap='8px' bg='#EC7E83' borderRadius='4px' flex='none' order='4' flexGrow='0'>
                    Submit
                </Button>
            </Flex>
        )
    }
}

export default MainForm