import React, { useEffect, useState, useRef } from 'react'
import InputStyled from '../../../styled/atoms/inputStyled'
import colorScheme from '../../../../misc/colorScheme'
import { connect } from 'react-redux'
import { additionalInputStyles } from '../../../../misc/additionalInputStyles'

const Input = ({
    type,
    text,
    placeholder,
    dispatch,
    callback,
    validate,
    dispatchable,
    height,
    ...props
}) => {
    const inputRef = useRef()
    const [typeOf] = useState(type)
    const [buttonText] = useState(text)
    const [textPlaceholder] = useState(placeholder)
    const [inputStyles, setInputStyles] = useState('')
    const [incomingHeight] = useState(height)
    const [shouldValidate, setShouldValidate] = useState({ status: false, message: '' })

    useEffect(() => {
        if (shouldValidate && shouldValidate.status) {
            dispatch(dispatchable(shouldValidate.message))
             setInputStyles(`
                border: 5px solid ${ colorScheme.watermelon };
                box-sizing: border-box;
                padding: 10px;
            `)
        } else {
            switch(typeOf) {
                case 'button':
                case 'submit':
                    setInputStyles(additionalInputStyles.buttonInputStyles(colorScheme))
                    break
                case 'text':
                case 'password':
                    setInputStyles(additionalInputStyles.textInputStyles(colorScheme))
                    break
                case 'file':
                    setInputStyles(
                        `width: fit-content;
                     font-size: 10px;
                     `
                    )
                    break
                default:
                    break
            }
        }
    }, [shouldValidate, typeOf])

    return (
        <InputStyled
          height = { incomingHeight }
          onChange = { e => callback(e.target.value) }
          ref = { inputRef }
          type = { typeOf }
          inputStyles = { inputStyles }
          value = { buttonText }
          placeholder = { textPlaceholder }
          onBlur = { () => setShouldValidate(validate) }
        />
    )
}

export default connect() (Input)
