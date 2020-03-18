import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const InputStyled = styled.input`
outline: none;
border: none;
height: 25%;
width: 80%;
font-size: 25px;
margin-bottom: 8%;
text-align: center;
${ props => props.inputStyles }
`

const InputWrapper = ( {type, inputStyles, text, ...props }) => {
    const [value, setValue] = useState('')

    useEffect(() => {
        switch (type) {
          case 'text':
          case 'password':
              console.log(value)
              break
          default:
              break
        }
    }, [value, type])

    return (
        <InputStyled
          type={ type }
          inputStyles = { inputStyles }
          value = { text }
          placeholder = { props.placeholder }
          onChange = { e => setValue(e.target.value) }
        />
    )
}

export default InputWrapper
