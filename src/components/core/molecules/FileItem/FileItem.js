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
          <div>
            <Text
              size = 'medium'
            >
              Cold black holes or families of D-brans
            </Text>
          </div>
        </FileItemStyled>
    )
}

export default FileItem
