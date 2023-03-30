import { Card, CardBody,  Text } from '@chakra-ui/react'
import React from 'react'

function SimpleCardC() {
    return (
        <Card alignSelf='strech' >
            <CardBody display='flex' flexDir='column' alignItems='flex-start' padding='28px' gap='24px' flex='none' order='1' alignSelf='stretch' flexGrow='0'
                borderRadius='8px' bg='white' boxShadow='0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)'>
                    <Text color='#718096' fontSize='18px' fontWeight='400' lineHeight='156%'>
                    Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus hendrerit justo eu diam varius dictum</Text>
           
            </CardBody>
        </Card>
    )
}

export default SimpleCardC