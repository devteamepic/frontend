import React, { useState } from 'react'
import IconStyled from '../../../styled/atoms/iconStyled'
import cross from '../../../../misc/images/cross.png'
import v from '../../../../misc/images/v.png'
import fileIcon from '../../../../misc/images/fileIcon.png'
import profIcon from '../../../../misc/images/profIcon.png'

const Icon = ({ icon, heightParam, widthParam, ...props }) => {
    const [height] = useState(heightParam)
    const [width] = useState(widthParam)
    const [icons] = useState({
        cross: cross,
        v: v,
        file: fileIcon,
        person: profIcon
    })

    console.log(icons[icon])

    return(
        <IconStyled
          height = { height }
          width = { width }
        >
          <img
            src={ icons[icon] }
            alt={ 'asdf' }
            style = {{ maxHeight: '100%', maxWidth: '100%' }}
          />
        </IconStyled>
    )
}

export default Icon
