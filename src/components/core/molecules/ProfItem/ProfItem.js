import React, { useState } from 'react'
import ProfItemStyled from '../../../styled/molecules/profItemStyled'
import colorScheme from '../../../../misc/colorScheme'
import Icon from '../../atoms/Icon/Icon'
import Text from '../../atoms/Text/Text'
import { removeFileAction } from '../../../../redux/actions/addFileAction'
import { connect } from 'react-redux'

const ProfItem = ({ fileObject, dispatch, ...props }) => {
  const [file] = useState(fileObject)
    const [isUpsideDown, setIsUpsideDown] = useState(false)

  const handleClick = () => {
      setIsUpsideDown(!isUpsideDown)
  }

    return (
        <ProfItemStyled
          colorScheme = { colorScheme }
        >
          <Icon
            heightParam = '110px'
            widthParam = '110px'
            icon = 'person'
          />
          <div style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}>
            <Text
              size = 'medium'
            >
              asdf
            </Text>
            <Text
              size = 'medium'
            >
              asdf
            </Text>
          </div>
          <button
            onClick = { handleClick }
            style = {{
              outline: 'none',
              border: 'none',
              background: 'none',
              width: '50px',
              height: '50px',
              margin: isUpsideDown ? '25px 0 0 25px' : '0 0 0 25px',
              padding: '0',
              transform: 'translateY(25%) translateX(-25%)'
            }}
          >
            <Icon
              degree = { isUpsideDown ? '0' : '180' }
              heightParam = '50px'
              widthParam = '50px'
              icon = 'v'
            />
          </button>
        </ProfItemStyled>
    )
}

export default connect() (ProfItem)
