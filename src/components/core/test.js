import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import '../../App.css'
import ProfItem from '../core/molecules/ProfItem/ProfItem'
import FileItem from '../core/molecules/FileItem/FileItem'
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
            <FileItem
              fileObject = {{
                name: 'asdf',
                size: 'asdf'
              }}
            />
            <FileItem
              fileObject = {{
                name: 'asdf',
                size: 'asdf'
              }}
            />
            <FileItem
              fileObject = {{
                name: 'asdf',
                size: 'asdf'
              }}
            />
            <FileItem
              fileObject = {{
                name: 'asdf',
                size: 'asdf'
              }}
            />
            <FileItem
              fileObject = {{
                name: 'asdf',
                size: 'asdf'
              }}
            />
          </List>
          <div style={{ height: '100px' }}>
          </div>
          <List
            color = 'denim'
          >
            <ProfItem/>
            <ProfItem/>
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
