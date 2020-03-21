import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Text from '../../atoms/Text/Text'

const ErrorMessage = ({ error, ...props }) => {
    const [messageToDisplay, setMessageToDisplay] = useState(error)

    useEffect(() => {
        setMessageToDisplay(error)
    }, [error])

    return(
        <div>
          <Text
            size = 'medium'
          >
            { messageToDisplay }
          </Text>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { error : state.validationErrorMessage }
}

export default connect(mapStateToProps) (ErrorMessage)
