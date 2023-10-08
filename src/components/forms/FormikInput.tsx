import { useField } from "formik";
import { Input, FormControl, FormErrorMessage, InputProps } from "@chakra-ui/react";

interface FormikInputProps extends InputProps{
}

const FormikInput: React.FC<FormikInputProps> = ({ name,  ...props }) => {
    const [field, meta] = useField(name as string);

    return (
        <FormControl isInvalid={meta.touched && meta.error ? true : false}>
            <Input {...field} id={name}  {...props}/>
            {meta.touched && meta.error && (
                <FormErrorMessage>{meta.error}</FormErrorMessage>
            )}
        </FormControl>
    );
};

export default FormikInput;
