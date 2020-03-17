export default function(state = [], action) {
    switch(action.type) {
        case 'NEW_FILE':
            return action.payload
        case 'MORE_FILES':
            return action.payload
        default:
            return []
    }
}
