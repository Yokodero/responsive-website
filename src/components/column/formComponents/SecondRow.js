import React, { Component } from 'react'
import { Flex, FormControl, FormLabel, Input } from '@chakra-ui/react'

export class SecondRow extends Component {
  render() {
    return (
        <Flex display='flex' flexDir={{base:'column',md:'row'}} alignItems='flex-start' gap='32px' flex='none' order='1' alignSelf='stretch' flexGrow='0'>
                <FormControl >
                    <FormLabel flex='none' order='0' alignSelf='stretch' flexGrow='0' color='#2D3748' fontWeight='500' fontSize='16px' lineHeight='150%'>
                        Email
                    </FormLabel>
                    <Input border='1px solid #E2E8F0' borderRadius='6px' type='name' />
                </FormControl>
                <FormControl >
                    <FormLabel flex='none' order='1' alignSelf='stretch' flexGrow='0' color='#2D3748' fontWeight='500' fontSize='16px' lineHeight='150%'>
                        Phone Number
                    </FormLabel>
                    <Input border='1px solid #E2E8F0' borderRadius='6px' type='name' />
                </FormControl>
            </Flex>
    )
  }
}

export default SecondRow