import { Box, Container } from '@chakra-ui/react'
import React from 'react'
import Banner from '../Banner'
import Header from '../navigation/Header'
import { Outlet } from 'react-router-dom'

interface Props {}

function ConversionCard(props: Props) {
    return (
        <Box w='100%' bgColor='gray.100' p='5' borderRadius='lg'>
            This is a card
        </Box>
    )
}

export default ConversionCard
