import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import ConversionCard from '../components/cards/ConversionCard'
import useGetAllCurrencyConversions from '../api/hooks/useGetAllCurrencyConversions'

interface Props {}

function History(props: Props) {

    const {data} = useGetAllCurrencyConversions();

    return (
        <Box>
            <Text fontWeight='semibold' fontSize='xl' color='gray.700'>Historial de transacciones</Text>
            <Box maxH='500px' overflow='auto'>
                <SimpleGrid flexDir='column' gap={5} mt='5'>
                    {
                        (
                            data?.map((x) => 
                                <ConversionCard from={x.from} to={x.to} quantiy={x.quantity} result={x.result}></ConversionCard>
                            )
                        )
                    }
                </SimpleGrid>
            </Box>
        </Box>
    )
}

export default History
