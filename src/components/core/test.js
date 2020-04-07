import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import '../../App.css'
import DragAndDrop from '../core/atoms/DragAndDrop/DragAndDrop'
import Input from '../core/atoms/Input/Input'
import Text from '../core/atoms/Text/Text'
import Icon from '../core/atoms/Icon/Icon'
import { concernTrigger } from '../../redux/actions/concernAction'

const Test = ({ files, concern, ...props }) => {
  const [file, setFile] = useState(files)

  console.log(concern)

  useEffect(() => {
    setFile(files)
  }, [files])

    return (
        <div id='test'>
          <Icon
            icon = 'file'
            heightParam = '100px'
            widthParam = '100px'
          />
          <div style={{ height: '500px', width: '500px' }}>
            <DragAndDrop
              height = { '500px' }
            />
          </div>
          <Text
            size = 'large'
          >
            { file.length !== 0 && file[0].name }
          </Text>
          <Input
            type = 'checkbox'
            callback = { value => concernTrigger() }
          />
        </div>
    )
}

const mapStateToProps = (state) => {
  return {
    error : state.validationErrorMessage,
    files: state.files,
    concern: state.concern
  }
}

export default connect(mapStateToProps) (Test)
