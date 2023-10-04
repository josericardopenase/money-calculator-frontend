import { Text, Box, Select, SelectProps } from '@chakra-ui/react'
import React from 'react'

interface Props extends SelectProps {}

function CurrencyPicker({...props} : Props) {
    return (
        <Select {...props}>
            <option>USD</option>
            <option>EUR</option>
            <option>YEN</option>
        </Select>
    )
}

export default CurrencyPicker
