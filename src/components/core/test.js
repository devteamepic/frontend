import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import '../../App.css'
import ProfItem from '../core/molecules/ProfItem/ProfItem'
import DragAndDrop from '../core/atoms/DragAndDrop/DragAndDrop'
import Input from '../core/atoms/Input/Input'
import CheckboxMessage from '../core/molecules/CheckboxMessage/CheckboxMessage'

const Test = ({ files, concern, dispatch, ...props }) => {
  const [file, setFile] = useState(files)

  useEffect(() => {
    setFile(files)
  }, [files])

    return (
        <div id='test'>
          <div
            style = {{ width: '200px', height: '200px' }}
          >
            <DragAndDrop
              height = '200px'
            />
          </div>
          <Input
            type = 'file'
          />
          <CheckboxMessage
            textColor = 'watermelon'
          >
            I give my concent to UNIFOUND to process my thesis
          </CheckboxMessage>
          <ul style={{ listStyleType: 'none', width: '500px', backgroundColor: 'green', margin: '0', padding: '20px 0 1px 0', boxSizing: 'border-box', minHeight: '100px' }}>
            <ProfItem/>
            <ProfItem/>
            <ProfItem/>
          </ul>
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
