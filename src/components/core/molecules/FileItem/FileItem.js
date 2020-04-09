import React, { useState } from 'react'
import FileItemStyled from '../../../styled/molecules/fileItemStyled'
import colorScheme from '../../../../misc/colorScheme'
import Icon from '../../atoms/Icon/Icon'
import Text from '../../atoms/Text/Text'

const FileItem = ({ fileName, fileSize, ...props }) => {
  const [name] = useState(fileName)
  const [size] = useState(fileSize)

  const handleClick = () => {
    alert('hi')
  }

    return (
        <FileItemStyled
          colorScheme = { colorScheme }
        >
          <Icon
            heightParam = '110px'
            widthParam = '110px'
            icon = 'file'
          />
          <div style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}>
            <Text
              size = 'medium'
            >
              { name }
            </Text>
            <Text
              size = 'medium'
            >
              File size: { size }
            </Text>
          </div>
          <button
            onClick = { handleClick }
            style = {{
              outline: 'none',
              border: 'none',
              background: 'none',
              width: '50px',
              height: '50px',
              margin: '50% 0 0 50%',
              padding: '0',
              transform: 'translateY(25%) translateX(-25%)'
            }}
          >
            <Icon
              heightParam = '50px'
              widthParam = '50px'
              icon = 'cross'
            />
          </button>
        </FileItemStyled>
    )
}

export default FileItem