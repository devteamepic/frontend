import React from 'react'
import Button from '../atoms/Button/Button'
import TextArea from '../atoms/TextArea/TextArea'

const Test = () => {
    const testAlert = () => {
        window.location.href = '/home'
    }

    return (
        <div style = {{ width: '100%', height: '100%' }}>
          <div style = {{ width: '750px', height: '100px' }}>
            <Button
              callback = { testAlert }
            >
              test
            </Button>
          </div>
          <div style = {{ width: '750px', height: '100px' }}>
            <TextArea
              height = '100%'
              width = '100%'
            />
          </div>
        </div>
    )
}

export default Test
