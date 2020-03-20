import React from 'react'
import styled from 'styled-components'
import '../../../App.css'

const FormStyled = styled.div`
width: 500px;
height: 80%;
background-color: ${ props => props.colorScheme.steel };
text-align: center;
`

const FormStyledWrapper = ({ children, callback, ...props }) => {

    return (
        <FormStyled
          colorScheme = { props.colorScheme }
        >
          <form
            className='form'
            onSubmit = { () => callback() }
          >
            { children }
          </form>
        </FormStyled>
    )
}

export default FormStyledWrapper
