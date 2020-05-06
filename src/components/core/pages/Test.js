import React from 'react'
import Button from '../atoms/Button/Button'

const Test = () => {
    const testAlert = () => {
        window.location.href = '/home'
    }
    return (
        <Button
          callback = { testAlert }
        >
          asdf
        </Button>
    )
}

export default Test
