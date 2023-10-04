import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import ConversionCard from '../components/cards/ConversionCard'

interface Props {}

function History(props: Props) {
    return (
        <Box>
            <Text fontWeight='semibold' fontSize='xl' color='gray.700'>Historial de transacciones</Text>
            <Box maxH='500px' overflow='auto'>
                <SimpleGrid flexDir='column' gap={5} mt='5'>
                    {
                        (new Array(20)).fill(0).map(() => (
                            <ConversionCard></ConversionCard>
                        ))
                    }
                </SimpleGrid>
            </Box>
        </Box>
    )
}

export default History
