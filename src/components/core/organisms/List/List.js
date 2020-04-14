import React, { useState } from 'react'
import colorScheme from '../../../../misc/colorScheme'
import ListStyled from '../../../styled/organisms/listStyled'

const List = ({ children, color, ...props }) => {
    const [backgroundColor] = useState(colorScheme[color])

    return (
        <ListStyled
          backgroundColor = { backgroundColor }
        >
          { children }
        </ListStyled>
    )
}

export default List
