import React, { useState } from 'react'
import colorScheme from '../../../../misc/colorScheme'
import ListStyled from '../../../styled/organisms/listStyled'

/*
 * List component is not an organism due to the fact that it
 * contains <li /> items that are already organisms. However I've
 * come across the limit of hierarchy of Atomic Design Pattern.
 */
const List = ({ children, color, margin, ...props }) => {
  const [backgroundColor] = useState(colorScheme[color])
  const [marginTop] = useState(margin)

  return (
    <ListStyled
      backgroundColor = { backgroundColor }
      marginTop = { marginTop }
    >
      { children }
    </ListStyled>
  )
}

export default List
