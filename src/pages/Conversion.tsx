import { Box, Button, Center, Flex, FormLabel, Icon, Input, Text } from '@chakra-ui/react'
import { MdOutlineSwapHoriz, MdSwapHoriz } from 'react-icons/md'
import React from 'react'
import CurrencyPicker from '../components/forms/CurrencyPicker'

interface Props {}

function Conversion(props: Props) {
    return (
        <Box>
            <Flex gap={4} alignItems='center'>
                <Box w='100%'>
                    <FormLabel color='gray.500'>Quantity</FormLabel>
                    <Input variant='filled' placeholder='Quantity...'></Input>
                </Box>
                <Box w='100%'>
                    <FormLabel color='gray.500'>From</FormLabel>
                    <CurrencyPicker variant='filled'></CurrencyPicker>
                </Box>
                <Box mt='8' cursor='pointer'>
                    <Center borderRadius='50%' w='40px' minW='40px' h='40px' bgColor='gray.100'fontSize='xl' _hover={{bgColor: 'gray.200'}}>
                        <Icon color='gray.500' as={MdSwapHoriz}></Icon>
                    </Center>
                </Box>
                <Box w='100%'>
                    <FormLabel color='gray.500'>To</FormLabel>
                    <CurrencyPicker variant='filled'></CurrencyPicker>
                </Box>
            </Flex>
            <Flex justifyContent='end' mt='4' >
                <Button size='lg'>
                    Convertir
                </Button>
            </Flex>
            <Flex w='100%' justifyContent='center' alignItems='center' flexDir='column' mt='5'>
                <Text color='gray.500'>Final result:</Text>
                <Text color='gray.700' fontSize='3xl' fontWeight='bold'>300$</Text>
            </Flex>
        </Box>
    )
}

export default Conversion
