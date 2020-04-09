import React, { useState, useEffect } from 'react'
import IconStyled from '../../../styled/atoms/iconStyled'
import cross from '../../../../misc/images/cross.png'
import v from '../../../../misc/images/v.png'
import fileIcon from '../../../../misc/images/fileIcon.png'
import profIcon from '../../../../misc/images/profIcon.png'

const Icon = ({ icon, heightParam, widthParam, ...props }) => {
    const [height] = useState(heightParam)
    const [width] = useState(widthParam)
    const [margin, setMargin] = useState('auto')
    const [transform, setTransform] = useState('')
    const [icons] = useState({
        cross: cross,
        v: v,
        file: fileIcon,
        person: profIcon
    })

    useEffect(() => {
        if (icon === 'v' || icon === 'cross') {
            setMargin('100% 0 0 50%')
            setTransform('translateY(-50%) translateX(-25%)')
        }
    }, [icon])

    return(
        <IconStyled
          height = { height }
          width = { width }
        >
          <img
            src={ icons[icon] }
            alt={ icon }
            style = {{ maxHeight: '100%', maxWidth: '100%', margin: margin, transform: transform }}
          />
        </IconStyled>
    )
}

export default Icon
