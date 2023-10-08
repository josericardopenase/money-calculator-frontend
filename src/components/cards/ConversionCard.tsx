import { Text, Box, Container } from '@chakra-ui/react'
import React from 'react'

interface Props {
    from : string,
    to : string,
    quantiy : number,
    result : number
}

function ConversionCard(props: Props) {

    function truncateNumber(num : number){
        return Math.trunc(num * 100) / 100
    }

    return (
        <Box w='100%' bgColor='gray.100' p='5' borderRadius='lg' display='flex' justifyContent='space-between'>
            <Text fontWeight='semibold' color='gray.700'>
                {truncateNumber(props.quantiy)} {props.from} - {truncateNumber(props.result)} {props.to}󠁧󠁢󠁥󠁮󠁧󠁿  
            </Text>
        </Box>
    )
}

export default ConversionCard
