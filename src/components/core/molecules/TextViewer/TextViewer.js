import React, { useState } from 'react'
import Text from '../../atoms/Text/Text'
import { Link } from 'react-router-dom'
import colorScheme from '../../../../misc/colorScheme'

const TextViewer = ({ childrenData, ...props }) => {
    const [children] = useState(childrenData)
    return (
        <div style={{ height: '100%', color: 'white', width: '100%', backgroundColor: colorScheme.denim, textAlign: 'center', paddingTop: '25%', boxSizing: 'border-box' }}>
          { children.map(child => {
              if (child.component === 'text') {
                  return (
                      <Text
                        size = { child.size }
                      >
                        { child.textValue }
                      </Text>
                  )
              }
              return (
                  <Link
                    to = { child.link }
                    style={{ color: colorScheme.blue }}
                  >
                    { child.textValue }
                  </Link>
              )
          }) }
        </div>
    )
}

export default TextViewer
