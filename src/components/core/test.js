import React from 'react'
import Input from './atoms/Input/Input'
import FileContainer from '../../redux/containers/fileContainer'
import { connect } from 'react-redux'
import '../../App.css'

const Test = (props) => {

    return (
        <div id='test'>
          <Input
            type = { 'text' }
            placeholder = 'email'
          />
          <Input
            type = { 'button' }
            text = 'asdf'
          />
          <FileContainer/>
          <div>
            { props.files.name }
          </div>
        </div>
    )
}

const mapStateToProps = (state) => {
  return { files: state.files }
}

export default connect(mapStateToProps) (Test)
