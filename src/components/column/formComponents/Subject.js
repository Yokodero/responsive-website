import { FormControl, FormLabel, Input } from '@chakra-ui/react'
import React, { Component } from 'react'

export class Subject extends Component {
    render() {
        return (
            <FormControl order='2' >
                <FormLabel flex='none' alignSelf='stretch' flexGrow='0' color='#2D3748' fontWeight='500' fontSize='16px' lineHeight='150%'>
                    Subject
                </FormLabel>
                <Input border='1px solid #E2E8F0' borderRadius='6px' type='name' />
            </FormControl>
        )
    }
}

export default Subject