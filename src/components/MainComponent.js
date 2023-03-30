import { Flex } from '@chakra-ui/react'
import React, { Component } from 'react'
import Column from './column/Column'
import SdBar from './sidebar/SdBar'

export class MainComponent extends Component {
  render() {
    return (
      <Flex alignItems='flex-start' flexDir={{base:'column',md:'row'}} display='flex' bg='#F7FAFC' gap='32px' padding={{base:'24px',md:'80px 112px 80px 112px'}}>
        <Column></Column>
        <SdBar />
      </Flex>
    )
  }
}

export default MainComponent