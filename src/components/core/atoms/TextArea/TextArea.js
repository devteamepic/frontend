import React, { useState } from 'react'
import TextAreaStyled from '../../../styled/atoms/textAreaStyled'
import colorScheme from '../../../../misc/colorScheme'

const TextArea = ({ height, width, shouldDisable, children, ...props }) => {
  const [size] = useState({ height, width })
  const [disable] = useState(shouldDisable)
    const [numOfChars, setNumOfChars] = useState(1000)

    const handleKeyPress = (e) => {
      e.preventDefault()

      setNumOfChars(1000 - e.target.value.length)
    }

  return (
    <div
      style = {{ height: size.height, width: size.width }}
    >
      <TextAreaStyled
        size = { size }
        maxlength = '1000'
        onChange = { handleKeyPress }
        disabled = { disable }
      >
        { children }
      </TextAreaStyled>
      { !disable &&
        <input
          style = {{
            width: size.width,
            textAlign: 'right',
            border: '0',
            backgroundColor: colorScheme.marigold,
            color: 'black',
            padding: '0'
          }}
          disabled
          value={ numOfChars }
        />
      }

    </div>
  )
}

export default TextArea
