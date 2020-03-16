import React from 'react'
import styled from 'styled-components'

const InputStyled = styled.input`
outline: none;
border: none;
height: 100px;
width: 400px;
&:focus {
border: 5px solid ${props => props.colorScheme.marigold};
}
`

export default InputStyled
