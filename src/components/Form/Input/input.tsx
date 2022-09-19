import { forwardRef, ForwardRefRenderFunction } from "react";
import { 
  FormControl, FormErrorMessage, FormLabel, Input as CharkraInput, InputProps as ChakraInputProps
} from "@chakra-ui/react";
import { FieldError } from 'react-hook-form'


interface InputProps extends ChakraInputProps{
  name: string;
  label?: string;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = 
({name, label, error = null, ...rest}, ref) => {
  return( 
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel color='gray.300' fontSize='xs' fontWeight='bold' htmlFor={name}>{label}</FormLabel>}

      <CharkraInput
        name={name} 
        id={name} 
        focusBorderColor="blue.300"
        bgColor="gray.100"
        variant="outline"
        _hover={{
          bgColor: 'gray.150'
        }}
        size="lg"
        ref={ref}
        {...rest}
      />
      { !!error && (
        <FormErrorMessage>
          {error.message}
        </FormErrorMessage>
      )}
    </FormControl>
  )
}

export const Input = forwardRef(InputBase)