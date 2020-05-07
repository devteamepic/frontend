import React, { useState } from 'react'
import SubmissionItemStyled from '../../../styled/organisms/submissionItemStyled'
import TextViewer from '../../molecules/TextViewer/TextViewer'
import Icon from '../../atoms/Icon/Icon'
import colorScheme from '../../../../misc/colorScheme'

const SubmissionItem = () => {
  const [isUpsideDown, setIsUpsideDown] = useState(true)
  const [display, setDisplay] = useState('')
  const [header] = useState([
    { component: 'text', size: 'large', textValue: '1st submission details' },
  ])
  const [text] = useState([
    { component: 'text', size: 'small', textValue: 'Submitted on 02.04.2020' },
  ])

  const handleClick = () => {
    setIsUpsideDown(!isUpsideDown)
    isUpsideDown ? setDisplay('') : setDisplay('display: none;')
  }

  return (
    <SubmissionItemStyled
      shouldExpand = { isUpsideDown }
    >
      <TextViewer
        childrenData = { header }
        notDescription = { true }
        additionalStyles = { 'color: ' + colorScheme.marigold + '; text-align: left;' }
      />
      <TextViewer
        childrenData = { text }
        notDescription = { true }
        additionalStyles = { 'text-align: left;' + display }
      />
      <button
        onClick = { handleClick }
        style = {{
            outline: 'none',
            border: 'none',
            background: 'none',
            width: '50px',
            height: isUpsideDown && '50px',
            padding: '0',
            transition: '0.5s ease all',
            gridRow: '1/3',
        }}
      >
        <Icon
          degree = { isUpsideDown ? '180' : '0' }
          widthParam = '50px'
          icon = 'v'
        />
      </button>
      { isUpsideDown &&
        <div
          style = {{
              gridColumn: '1/3',
              width: '100%',
              height: '100%',
              gridRow: '3/-1',
              display: 'grid',
              gridTemplateColumns: '40% auto',
              gridTemplateRows: 'auto auto',
              padding: '0 10px 10px 0',
          }}
        >
          <div
            style = {{ width: '100%', height: '100%', backgroundColor: 'red', gridRow: '1/3' }}
          >
          </div>
          <div
            style = {{ width: '100%', height: '100%', backgroundColor: 'green' }}
          >
          </div>
          <div
            style = {{ width: '100%', height: '100%', backgroundColor: 'blue' }}
          >
          </div>
        </div>
      }
    </SubmissionItemStyled>
  )
}

export default SubmissionItem
