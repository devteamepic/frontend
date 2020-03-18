import React, { useState, useEffect } from 'react'
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
