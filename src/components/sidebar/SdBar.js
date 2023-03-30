import {Flex } from '@chakra-ui/react'
import React from 'react'
import ArtDirecting from './ArtDirecting'
import Commitment from './Commitment'

function SdBar() {
  return (
    <Flex display='flex' flexDir='column' alignItems='flex-start' pt='72px' gap='64px' Flex='none' order='1' flexGrow='0'>
      <Commitment />
      <ArtDirecting />
    </Flex>
  )
}

export default SdBar