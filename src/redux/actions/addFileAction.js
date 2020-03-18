export function addOneFileAction(file) {
    console.log('singleFile')
    return {
        type: 'NEW_FILE',
        payload: file
    }
}
