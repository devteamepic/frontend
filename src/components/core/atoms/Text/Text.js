import React, { useState } from 'react'
import TextStyled from '../../../styled/atoms/textStyled'

const Text = ({ size, isHeader, children, animate, ...props }) => {
  const [shouldAnimate] = useState(animate)
  const [shouldAddNewLine] = useState(isHeader)
  const [sizes] = useState({
    large: '32px',
    medium: '24px',
    small: '16px',
  })

  return (
    <TextStyled
      size = { sizes[size] }
      shouldAddNewLine = { shouldAddNewLine }
      shouldAnimate = { shouldAnimate }
    >
      { children }
    </TextStyled>
  )
}

export default Text
