import React from 'react'
import SubmissionItem from '../organisms/SubmissionItem/SubmissionItem'
import List from '../organisms/List/List'

const Test = () => {
    const testAlert = () => {
      console.log('asdf')
//        window.location.href = '/home'
    }

    return (
        <div style = {{ width: '60%', height: '100%' }}>
          <List
            color = { 'marigold' }
          >
            <SubmissionItem />
          </List>
        </div>
    )
}

export default Test
