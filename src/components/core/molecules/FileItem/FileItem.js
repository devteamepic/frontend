import React from 'react'
import FileItemStyled from '../../../styled/molecules/fileItemStyled'
import colorScheme from '../../../../misc/colorScheme'
import Icon from '../../atoms/Icon/Icon'
import Text from '../../atoms/Text/Text'

const FileItem = () => {
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
              Cold black holes or families of D-brans
            </Text>
            <Text
              size = 'medium'
            >
              File size: 5MB
            </Text>
          </div>
          <Icon
            heightParam = '100%'
            widthParam = '50px'
            icon = 'cross'
          />
        </FileItemStyled>
    )
}

export default FileItem
