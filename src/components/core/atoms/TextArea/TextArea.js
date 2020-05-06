import React, { useState, useEffect } from 'react'
import TextAreaStyled from '../../../styled/atoms/textAreaStyled'

const TextArea = ({ height, width, ...props }) => {
  const [size] = useState({ height, width })
    const [numOfChars, setNumOfChars] = useState(1000)

    const handleKeyPress = (e) => {
        e.preventDefault()

        setNumOfChars(numOfChars - 1)
        console.log(numOfChars)
    }

  return (
    <TextAreaStyled
      size = { size }
      maxlength = '1000'
      onKeyUp = { handleKeyPress }
    />
  )
}

export default TextArea
