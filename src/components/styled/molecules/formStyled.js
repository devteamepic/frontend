import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import '../../../App.css'

const FormStyled = styled.div`
width: ${ props => props.type === 'login' ? '500px' : '700px' };
height: 80%;
background-color: ${ props => props.colorScheme.steel };
text-align: center;
`

const FormStyledWrapper = ({ children, callback, ...props }) => {
  const [incomingType] = useState(props.type)

  console.log(incomingType)
    return (
        <FormStyled
          colorScheme = { props.colorScheme }
        >
          <form
            id={ incomingType }
            onSubmit = { () => callback() }
          >
            { children }
          </form>
        </FormStyled>
    )
}

export default FormStyledWrapper
