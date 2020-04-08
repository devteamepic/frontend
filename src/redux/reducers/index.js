import { combineReducers } from 'redux'
import FileReducer from './fileReducer'
import authenticate from './loginReducer'
import validationErrorMessage from './validationMessageReducer'
import loginInputChange from './loginInputChangeReducer'
import registerInputChange from './registerInputChangeReducer'
import concern from './concernReducer'

const rootReducer = combineReducers({
    files: FileReducer,
    authenticate: authenticate,
    validationErrorMessage: validationErrorMessage,
    loginInputChange: loginInputChange,
    registerInputChange: registerInputChange,
    concern: concern,
})

export default rootReducer
