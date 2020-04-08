import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import '../../App.css'
import FileItem from '../core/molecules/FileItem/FileItem'

const Test = ({ files, concern, ...props }) => {
  const [file, setFile] = useState(files)

  useEffect(() => {
    setFile(files)
  }, [files])

    return (
        <div id='test'>
          <ul style={{ listStyleType: 'none', width: '500px', backgroundColor: 'green', margin: '0', padding: '20px 0 1px 0', boxSizing: 'border-box' }}>
            <FileItem/>
            <FileItem/>
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
