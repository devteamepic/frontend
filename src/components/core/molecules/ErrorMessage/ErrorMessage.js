import React, { useState, useEffect } from 'react'
import Text from '../../atoms/Text/Text'

const ErrorMessage = ({ error, ...props }) => {
    const [messageToDisplay, setMessageToDisplay] = useState(error)

    useEffect(() => {
      setMessageToDisplay(error)
    }, [error])

    return(
      <Text
        size = 'medium'
      >
        { messageToDisplay }
      </Text>
    )
}

export default ErrorMessage
