import React, { useState } from 'react'
import SubmissionItemStyled from '../../../styled/organisms/submissionItemStyled'
import TextViewer from '../../molecules/TextViewer/TextViewer'
import List from '../List/List'
import Icon from '../../atoms/Icon/Icon'
import Text from '../../atoms/Text/Text'
import TextArea from '../../atoms/TextArea/TextArea'
import ProfItem from '../ProfItem/ProfItem'
import colorScheme from '../../../../misc/colorScheme'


const SubmissionItem = () => {
  const [isUpsideDown, setIsUpsideDown] = useState(true)
  const [header] = useState([
    { component: 'text', size: 'large', textValue: '1st submission details' },
  ])
  const [text] = useState([
    { component: 'text', size: 'small', textValue: 'Submitted on 02.04.2020' },
  ])

  const handleClick = () => {
    setIsUpsideDown(!isUpsideDown)
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
        additionalStyles = { 'text-align: left;' }
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
              height: '500px',
              gridRow: '3/-1',
              display: 'grid',
              gridTemplateColumns: '40% 60%',
              gridTemplateRows: '40% 60%',
              padding: '0 10px 10px 0',
          }}
        >
          <div
            style = {{ width: '100%', height: '100%', backgroundColor: 'red', gridRow: '1/3' }}
          >
          </div>
          <div
            style = {{ width: '100%', height: '100%', color: 'white', padding: '0 10px 10px 10px', boxSizing: 'border-box' }}
          >
            <Text
              size = { 'medium' }
            >
              Abstract:
            </Text>
            <TextArea
              height = '95%'
              width = '100%'
              shouldDisable = { true }
            >
              asdf asdf asdf
              asdf asdf asdf
              asdf asdf asdf
              asdf asdf asdf
              asdf asdf asdf
              asdf asdf asdf
              asdf asdf asdf
              asdf asdf asdf
              asdf asdf asdf
              asdf asdf asdf
              asdf asdf asdf
              asdf asdf asdf
              asdf asdf asdf
              asdf asdf asdf
              asdf asdf asdf
              asdf asdf asdf
              asdf asdf asdf
              asdf asdf asdf
            </TextArea>
          </div>
          <div
            style = {{ padding: '10px 10px 30px 10px', color: 'white', height: '100%', boxSizing: 'border-box' }}
          >
            <Text
              size = { 'medium' }
            >
              Results:
            </Text>
            <List
              color = 'denim'
              margin = 'none;'
              heightParameter = '100%'
            >
              <ProfItem/>
              <ProfItem/>
              <ProfItem/>
              <ProfItem/>
              <ProfItem/>
              <ProfItem/>
            </List>
          </div>
      </div>
      }
    </SubmissionItemStyled>
  )
}

export default SubmissionItem
