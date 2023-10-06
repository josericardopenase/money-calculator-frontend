import { Text, Box, Container } from '@chakra-ui/react'
import React from 'react'

interface Props {}

function ConversionCard(props: Props) {
    return (
        <Box w='100%' bgColor='gray.100' p='5' borderRadius='lg' display='flex' justifyContent='space-between'>
            <Text fontWeight='semibold' color='gray.700'>
                200 EUR 🇪🇸 - 300 LBR 🏴󠁧󠁢󠁥󠁮󠁧󠁿  
            </Text>
            <Text color='gray.700'>
               29-11-2001 
            </Text>
        </Box>
    )
}

export default ConversionCard
