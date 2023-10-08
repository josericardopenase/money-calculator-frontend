import { Box, Button, Center, Flex, FormLabel, Icon, Input, Text } from '@chakra-ui/react'
import { MdOutlineSwapHoriz, MdSwapHoriz } from 'react-icons/md'
import React from 'react'
import CurrencyPicker from '../components/forms/CurrencyPicker'
import FormikInput from '../components/forms/FormikInput'
import { Formik } from 'formik'
import useConvertCurrency from '../api/hooks/useConvertCurrency'

interface Props {}

function Conversion(props: Props) {

    const { mutate, data, status} = useConvertCurrency();

    return (
        <Box>
            <Formik initialValues={{amount: 0, fromCurrency: "", toCurrency : "" }} onSubmit={(data) => mutate(data)}>
                {
                    ({submitForm, setFieldValue, getFieldMeta}) => (
                        <>
                            <Flex gap={4} alignItems='center'>
                                <Box w='100%'>
                                    <FormLabel color='gray.500'>Quantity</FormLabel>
                                    <FormikInput type='number' name='amount' variant='filled' placeholder='Quantity...'></FormikInput>
                                </Box>
                                <Box w='100%'>
                                    <FormLabel  color='gray.500'>From</FormLabel>
                                    <CurrencyPicker name='fromCurrency' variant='filled'></CurrencyPicker>
                                </Box>
                                <Box mt='8' cursor='pointer' onClick={() => {
                                    const fromCurrency = getFieldMeta('fromCurrency').value;
                                    const toCurrency = getFieldMeta('toCurrency').value;
                                    setFieldValue('fromCurrency', toCurrency);
                                    setFieldValue('toCurrency', fromCurrency);
                                }}>
                                    <Center borderRadius='50%' w='40px' minW='40px' h='40px' bgColor='gray.100'fontSize='xl' _hover={{bgColor: 'gray.200'}}>
                                        <Icon color='gray.500' as={MdSwapHoriz}></Icon>
                                    </Center>
                                </Box>
                                <Box w='100%'>
                                    <FormLabel color='gray.500'>To</FormLabel>
                                    <CurrencyPicker name='toCurrency' variant='filled'></CurrencyPicker>
                                </Box>
                            </Flex>
                            <Flex justifyContent='end' mt='4' >
                                <Button onClick={submitForm} size='lg'>
                                    Convertir
                                </Button>
                            </Flex>
                            {

                                status === 'success' && data.quantity >= 0 && 
                                    <Flex w='100%' justifyContent='center' alignItems='center' flexDir='column' mt='5'>
                                        <Text color='gray.500'>Final result:</Text>
                                        <Text color='gray.700' fontSize='3xl' fontWeight='bold'>{Math.floor(data.result * 100) / 100}</Text>
                                    </Flex>
                            }
                        </>
                    )
                }
            </Formik>
        </Box>
    )
}

export default Conversion
