export function addOneFileAction(file) {
    return {
        type: 'NEW_FILE',
        payload: file
    }
}

export function addMoreFilesAction(file) {
    return {
        type: 'MORE_FILES',
        payload: file
    }
}
