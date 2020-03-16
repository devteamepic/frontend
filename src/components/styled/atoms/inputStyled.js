import React from 'react'
import styled from 'styled-components'

const InputStyled = styled.input`
outline: none;
border: none;
height: 100px;
width: 400px;
font-size: 25px;
padding: 15px;
&:focus {
border: 5px solid ${props => props.colorScheme.marigold};
}
`

export default InputStyled
