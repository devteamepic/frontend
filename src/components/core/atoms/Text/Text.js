import React, { useState } from 'react'
import TextStyled from '../../../styled/atoms/textStyled'

const Text = ({ size, text, ...props }) => {
    const [sizes] = useState({
        large: '32px',
        medium: '24px',
        small: '16px',
    })

    console.log(sizes[size])

    return (
        <TextStyled
          size = { sizes[size] }
        >
          asdf
        </TextStyled>
    )
}

export default Text
