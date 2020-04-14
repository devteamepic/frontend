export default function(state = [], action) {
    switch(action.type) {
        case 'NEW_FILE':
            return action.payload
        case 'REMOVE_FILE':
            const index = state.indexOf(action.payload)
            let newArray = [...state]
            newArray.splice(index, 1)
            console.log(newArray)
            return newArray
        default:
            return state
    }
}
