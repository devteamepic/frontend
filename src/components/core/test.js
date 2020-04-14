import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import '../../App.css'
import ProfItem from '../core/molecules/ProfItem/ProfItem'
import DragAndDrop from '../core/atoms/DragAndDrop/DragAndDrop'
import Input from '../core/atoms/Input/Input'
import CheckboxMessage from '../core/molecules/CheckboxMessage/CheckboxMessage'
import List from '../core/organisms/List/List'

const Test = ({ files, concern, dispatch, ...props }) => {
  const [file, setFile] = useState(files)

  useEffect(() => {
    setFile(files)
  }, [files])

    return (
        <div id='test'>
          <List
            color = 'steel'
          >
            <ProfItem/>
            <ProfItem/>
            <ProfItem/>
            <ProfItem/>
            <ProfItem/>
            <ProfItem/>
          </List>
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
