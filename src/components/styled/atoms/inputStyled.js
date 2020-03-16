import React from 'react'
import styled from 'styled-components'

const InputStyled = styled.input`
outline: none;
border: none;
height: 100px;
width: 400px;
font-size: 25px;
${ props => props.inputStyles }
`

const InputWrapper = ( {type, inputStyles, text, ...props }) => {
    console.log(text)
    return (
        <InputStyled
          type={ type }
          inputStyles = { inputStyles }
          value = { text }
          placeholder = { props.placeholder }
        />
    )
}

export default InputWrapper
