export default function(state = [], action) {
    switch(action.type) {
        case 'NEW_FILE':
            return action.payload
        case 'REMOVE_FILE':
            let index = state.indexOf(action.payload)
            let newState = [...state]
            return [ ...newState.slice(0, index), ...newState.slice(index + 1) ]
        default:
            return state
    }
}
