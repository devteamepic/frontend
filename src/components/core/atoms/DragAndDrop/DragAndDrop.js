import React, { useState } from 'react'
import DragAndDropStyled from '../../../styled/atoms/dragAndDropStyled'

const DragAndDrop = () => {
    const [files, setFiles] = useState('')
    var fileArray = []

    const dropHandler = (e) => {
        e.preventDefault()

        if (e.dataTransfer.items) {
            for (var i = 0; i < e.dataTransfer.items.length; i++) {
                if (e.dataTransfer.items[i].kind === 'file') {
                    fileArray.push(e.dataTransfer.items[i].getAsFile())
                }
            }

            setFiles(fileArray)
        }
    }

    const dragOverHandler = (e) => {
        e.preventDefault()
    }

    return (
        <DragAndDropStyled
          onDrop = { dropHandler }
          onDragOver = { dragOverHandler }
        >
          +
        </DragAndDropStyled>
    )
}

export default DragAndDrop
