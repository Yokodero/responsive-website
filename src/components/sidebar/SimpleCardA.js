import { EmailIcon, PhoneIcon } from '@chakra-ui/icons'
import { Card, CardBody, Flex, Text } from '@chakra-ui/react'
import { AiFillEnvironment } from "react-icons/ai";
import React from 'react'

function SimpleCardA() {
    return (
        <Card alignSelf='stretch'>
            <CardBody display='flex' flexDir='column' alignItems='flex-start' padding='28px' gap='24px' flex='none' order='1' alignSelf='stretch' flexGrow='0'
                borderRadius='8px' bg='white' boxShadow='0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)'>
                <Flex>
                    <Text color='#718096' fontSize='18px' fontWeight='400' lineHeight='156%'>
                        Proin sapien ligula, aliquam eget enim ac, fringilla hendrerit nulla.</Text>
                </Flex>
                <Flex gap='8px' alignItems='center'>
                    <PhoneIcon flex='none' flexGrow='0' order='0' color = '#718096'></PhoneIcon>
                    <Text color='#718096' fontSize='18px' fontWeight='400' lineHeight='156%'>
                        +123 (4567) 8910
                    </Text>

                </Flex>
                <Flex gap='8px' alignItems='center'>
                    <EmailIcon flex='none' flexGrow='0' order='0' color = '#718096'></EmailIcon>
                    <Text color='#718096' fontSize='18px' fontWeight='400' lineHeight='156%'>
                        hello@exmaple.com
                    </Text>

                </Flex>
                <Flex gap='8px' alignItems='center'>
                    <AiFillEnvironment flex='none' flexGrow='0' order='0' color = '#718096'/>
                    <Text color='#718096' fontSize='18px' fontWeight='400' lineHeight='156%'>
                        120 Street Lorem Ipsum Sit amet
                    </Text>

                </Flex>

            </CardBody>
        </Card>
    )
}

export default SimpleCardA