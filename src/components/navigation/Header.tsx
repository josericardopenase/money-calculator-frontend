import React from 'react'
import { SimpleGrid, Text, Box, Icon } from '@chakra-ui/react'
import { BiCoin, BiBarChart, BiHistory } from 'react-icons/bi'
import { Link, useMatch } from 'react-router-dom'

const nav = [
    {
        title : "Conversion",
        icon : BiCoin,
        path: ""
    },
    {
        title : "Charts",
        icon : BiBarChart,
        path: "charts"
    },
    {
        title : "Transaction history",
        icon : BiHistory,
        path: "history"
    },
]

interface route{
    title : string, 
    path : string, 
    icon : any
}


function HeaderLink({x} : {x : route} ){
    const match = useMatch({ path: x.path, end: true });

    return <Link to={x.path}>
        <Box 
        display='flex' 
        _hover={{bgColor: !match ? 'gray.200' : 'white'}}
        alignItems='center' 
        p='4' gap={3} 
        color={match ? "#674CEB" : 'gray.600'} 
        bgColor={match ? 'white' : "gray.100"} 
        px='6' 
        cursor='pointer' 
        justifyContent='center'>
            <Icon fontSize='lg' as={x.icon}></Icon>
            <Text fontWeight='semibold' >{x.title}</Text>
        </Box>
    </Link>

}

function Header() {
    return (
       <SimpleGrid w='100%' columns={nav.length}>
        {
            nav.map((x, i) => (
                <HeaderLink x={x}></HeaderLink>
            ))
        }
       </SimpleGrid> 
    )
}

export default Header
