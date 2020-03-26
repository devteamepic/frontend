import React, { useState } from 'react'
import styled from 'styled-components'
import '../../../App.css'

const FormStyled = styled.div`
width: ${ props => props.type === 'login' ? '500px' : '900px' };
height: 80%;
background-color: ${ props => props.colorScheme.steel };
text-align: center;
margin: auto;
`

const FormStyledWrapper = ({ children, callback, ...props }) => {
  const [incomingType] = useState(props.type)

    return (
        <FormStyled
          colorScheme = { props.colorScheme }
          type = { incomingType }
        >
          <form
            id={ incomingType }
            onSubmit = { (e) => callback(e) }
          >
            { children }
          </form>
        </FormStyled>
    )
}

export default FormStyledWrapper
