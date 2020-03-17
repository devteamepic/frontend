import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addFileAction } from '../actions/addFileAction'
import DragAndDrop from '../../components/core/atoms/DragAndDrop'

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addFile: addFileAction }, dispatch)
}

const mapStateToProps = (state) => {
    return { files: state.files }
}

export default connect(mapStateToProps, mapDispatchToProps) (DragAndDrop)
