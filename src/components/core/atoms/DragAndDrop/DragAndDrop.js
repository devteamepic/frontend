import React from 'react'
import DragAndDropStyled from '../../../styled/atoms/dragAndDropStyled'

const DragAndDrop = () => {

    const dropHandler = (e) => {
        e.preventDefault()
        console.log('a')
    }

    const dragOverHandler = (e) => {
        e.preventDefault()
        console.log('b')
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
