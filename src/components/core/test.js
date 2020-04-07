import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import '../../App.css'
import DragAndDrop from '../core/atoms/DragAndDrop/DragAndDrop'
import Input from '../core/atoms/Input/Input'
import Text from '../core/atoms/Text/Text'

const Test = ({ files, ...props }) => {
  const [file, setFile] = useState(files)

  console.log(file)

  useEffect(() => {
    setFile(files)
  }, [files])

    return (
        <div id='test'>
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
            type = 'file'
          />
        </div>
    )
}

const mapStateToProps = (state) => {
  return {
    error : state.validationErrorMessage,
    files: state.files
  }
}

export default connect(mapStateToProps) (Test)
