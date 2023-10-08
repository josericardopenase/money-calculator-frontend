import { Box, Button, Center, Flex, FormLabel, Icon, Input, SimpleGrid } from '@chakra-ui/react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { MdOutlineSwapHoriz, MdSwapHoriz } from 'react-icons/md'
import React from 'react'
import CurrencyValueChart from '../components/charts/CurrencyValueChart';
import CurrencyPicker from '../components/forms/CurrencyPicker';
import { Formik } from 'formik';


interface Props {}

export default function Chart(props: Props) {
    return (
        <Box w='100%'>
            <Formik initialValues={{base: '', compare : ''}} onSubmit={(data) => console.log(data)}>
                {
                    ({submitForm, getFieldMeta, setFieldValue}) => 
                    <>
                        <Flex gap={4} alignItems='center'>
                            <Box w='100%'>
                                <FormLabel color='gray.500'>From</FormLabel>
                                <CurrencyPicker name='base' variant='filled'></CurrencyPicker>
                            </Box>
                            <Box mt='8' cursor='pointer' onClick={() => {
                                    const fromCurrency = getFieldMeta('base').value;
                                    const toCurrency = getFieldMeta('compare').value;
                                    setFieldValue('base', toCurrency);
                                    setFieldValue('compare', fromCurrency);
                            }}>
                                <Center borderRadius='50%' w='40px' minW='40px' h='40px' bgColor='gray.100'fontSize='xl' _hover={{bgColor: 'gray.200'}}>
                                    <Icon color='gray.500' as={MdSwapHoriz}></Icon>
                                </Center>
                            </Box>
                            <Box w='100%'>
                                <FormLabel color='gray.500'>To</FormLabel>
                                <CurrencyPicker name='compare' variant='filled'></CurrencyPicker>
                            </Box>
                        </Flex>
                        <Flex justifyContent='end' mt='4' >
                            <Button size='lg' onClick={() => submitForm()}>
                                Mostrar gráfico
                            </Button>
                        </Flex>
                    </>
                }
            </Formik>
            <Box w='100%' mt='10'>
                  <CurrencyValueChart></CurrencyValueChart>
            </Box>
        </Box>
    )
}
