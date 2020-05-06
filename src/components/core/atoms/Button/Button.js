import React, { useState } from 'react'
import ButtonStyled from '../../../styled/atoms/buttonStyled'

const Button = ({ children, callback, ...props }) => {
    return (
        <div style = {{ width: '100%', height: '100%' }} >
          <ButtonStyled
            onClick = { callback }
          >
            { children }
          </ButtonStyled>
        </div>
    )
}

export default Button
