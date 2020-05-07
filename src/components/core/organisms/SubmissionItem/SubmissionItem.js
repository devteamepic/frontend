import React, { useState } from 'react'
import SubmissionItemStyled from '../../../styled/organisms/submissionItemStyled'
import TextViewer from '../../molecules/TextViewer/TextViewer'
import Icon from '../../atoms/Icon/Icon'
import colorScheme from '../../../../misc/colorScheme'

const SubmissionItem = () => {
    const [header] = useState([
        { component: 'text', size: 'large', textValue: '1st submission details' },
    ])
    const [text] = useState([
        { component: 'text', size: 'small', textValue: 'Submitted on 02.04.2020' },
    ])

    const handleClick = () => {
        console.log('a')
    }

    return (
        <SubmissionItemStyled>
          <TextViewer
            childrenData = { header }
            notDescription = { true }
            additionalStyles = { 'color: ' + colorScheme.marigold + '; text-align: left;' }
          />
          <TextViewer
            childrenData = { text }
            notDescription = { true }
            additionalStyles = { 'text-align: left;' }
          />
          <button
            onClick = { handleClick }
            style = {{
                outline: 'none',
                border: 'none',
                background: 'none',
                width: '50px',
                height: 'fit-content',
                padding: '0',
                transition: '0.5s ease all',
                gridRow: '1/3',
            }}
          >
            <Icon
              widthParam = '50px'
              icon = 'v'
            />
          </button>
        </SubmissionItemStyled>
    )
}

export default SubmissionItem
