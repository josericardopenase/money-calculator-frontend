import { Text, Box, Select, SelectProps } from '@chakra-ui/react'
import React from 'react'
import useGetSupportedCurrencies from '../../api/hooks/useGetSupportedCurrencies'
import { useField } from 'formik';

interface Props extends SelectProps {}

function CurrencyPicker({...props} : Props) {


    //useField is a hook that returns [formik.getFieldProps, formik.getFieldMeta]
    //which we can spread on <input>. We can use field meta to show an error

    const [field,,helpers] = useField(props?.name as string);
    const { data, status } = useGetSupportedCurrencies({onSuccess: (data) => {
        helpers.setValue(Object.keys(data as any)[0])
    }});

    if(status === 'loading') return <Select {...props}/>

    return (
        <Select {...props} {...field}>
            {
                Object.keys(data || {}).map((key) => (
                    <option key={key} value={key}>{key}</option>
                ))
            }
        </Select>
    )
}

export default CurrencyPicker
