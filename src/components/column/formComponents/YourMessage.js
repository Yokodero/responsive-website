import { FormControl, FormLabel, Textarea } from '@chakra-ui/react'
import React, { Component } from 'react'

export class YourMessage extends Component {
    render() {
        return (
            <FormControl order='3' >
                <FormLabel flex='none'  alignSelf='stretch' flexGrow='0' color='#2D3748' fontWeight='500' fontSize='16px' lineHeight='150%'>
                    YourMessage
                </FormLabel>
                <Textarea></Textarea>
            </FormControl>
        )
  }
}

export default YourMessage