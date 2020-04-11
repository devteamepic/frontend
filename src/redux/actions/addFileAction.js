export function addOneFileAction(file) {
    return {
        type: 'NEW_FILE',
        payload: file
    }
}

export function removeFileAction(file) {
    return {
        type: 'REMOVE_FILE',
        payload: file
    }
}
