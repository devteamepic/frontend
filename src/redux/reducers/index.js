import { combineReducers } from 'redux'
import FileReducer from './fileReducer'
import authenticate from './loginReducer'
import validationErrorMessage from './validationMessageReducer'
import inputChange from './inputChangeReducer'

const rootReducer = combineReducers({
    files: FileReducer,
    authenticate: authenticate,
    validationErrorMessage: validationErrorMessage,
    inputChange: inputChange
})

export default rootReducer
