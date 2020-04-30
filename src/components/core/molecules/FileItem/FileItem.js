import React, { useState } from 'react'
import FileItemStyled from '../../../styled/molecules/fileItemStyled'
import colorScheme from '../../../../misc/colorScheme'
import Icon from '../../atoms/Icon/Icon'
import TextViewer from '../TextViewer/TextViewer'
import { removeFileAction } from '../../../../redux/actions/addFileAction'
import { connect } from 'react-redux'

const FileItem = ({ fileObject, dispatch, ...props }) => {
  const [file] = useState(fileObject)
  const [additionalStyles] = useState(`
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    height: 100%;
    width: 100%;
    text-align: left;
  `)
  const [fileText] = useState([
    { component: 'text', size: 'medium', textValue: fileObject.name, isHeader: true },
    { },
    { },
    { component: 'text', size: 'medium', textValue: fileObject.size, isHeader: true },
  ])

  const handleClick = () => {
    dispatch(removeFileAction(file))
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
      <TextViewer
        childrenData = { fileText }
        notDescription = { true }
        additionalStyles = { additionalStyles }
      />
      <button
        onClick = { handleClick }
        style = {{
          outline: 'none',
          border: 'none',
          background: 'none',
          width: '50px',
          height: '50px',
          margin: '25px 0 0 25px',
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

export default connect() (FileItem)
