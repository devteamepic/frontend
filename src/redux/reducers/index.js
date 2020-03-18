import { combineReducers } from 'redux'
import FileReducer from './fileReducer'

const rootReducer = combineReducers({
    files: FileReducer
})

export default rootReducer
