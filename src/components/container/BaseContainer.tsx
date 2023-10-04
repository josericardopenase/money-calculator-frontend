import { Box, Container } from '@chakra-ui/react'
import React from 'react'
import Banner from '../Banner'
import Header from '../navigation/Header'
import { Outlet } from 'react-router-dom'

interface Props {}

function BaseContainer(props: Props) {
    return (
        <Box w='100%' bgColor='gray.100' minH='100vh' pb='50'>
            <Banner></Banner>
            <Container maxW='container.lg' bgColor='white' mt='-60px' shadow='base' borderRadius='md' px='0' overflow='hidden' >
              <Header></Header>
              <Box p='20'>
                <Outlet></Outlet>
              </Box>
            </Container>
        </Box>
    )
}

export default BaseContainer
