import { combineReducers } from 'redux'
import FileReducer from './fileReducer'
import authenticate from './loginReducer'
import validationErrorMessage from './validationMessageReducer'

const rootReducer = combineReducers({
    files: FileReducer,
    authenticate: authenticate,
    validationErrorMessage: validationErrorMessage,
})

export default rootReducer
