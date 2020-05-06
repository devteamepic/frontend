import React from 'react'
import Button from '../atoms/Button/Button'
import TextArea from '../atoms/TextArea/TextArea'
import Tip from '../organisms/Tip/Tip'

const Test = () => {
    const testAlert = () => {
      console.log('asdf')
//        window.location.href = '/home'
    }

    return (
        <div style = {{ width: '100%', height: '100%' }}>
          <Tip
            height = '200px'
            width = '250px'
          />
        </div>
    )
}

export default Test
