import React, { useEffect, useState } from 'react'
import InputWrapper from '../../../styled/atoms/inputStyled'
import colorScheme from '../../../../misc/colorScheme'

const Input = ({
    type,
    text,
    placeholder,
    ...props
}) => {
    const [typeOf] = useState(type)
    const [buttonText] = useState(text)
    const [textPlaceholder] = useState(placeholder)
    const [inputStyles, setInputStyles] = useState('')

    useEffect(() => {
        switch(typeOf) {
            case 'button':
            case 'submit':
                setInputStyles(
                    `cursor: pointer;
                     background-color: ${ colorScheme.marigold }`
                )
                break
            case 'text':
            case 'password':
                setInputStyles(
                    `padding: 15px;
                     box-sizing: border-box;
                     &:focus {
                         border: 5px solid ${ colorScheme.marigold }
                     }`
                )
                break
            default:
                break
        }
    }, [typeOf])


    return (
        <InputWrapper
          type = { typeOf }
          inputStyles = { inputStyles }
          text = { buttonText }
          placeholder = { textPlaceholder }
        />
    )
}

export default Input
