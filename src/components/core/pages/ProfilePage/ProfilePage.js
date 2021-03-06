import React, { useState, useEffect } from 'react'
import ProfilePageStyled from '../../../styled/pages/profilePageStyled'
import Tip from '../../organisms/Tip/Tip'
import List from '../../organisms/List/List'
import Text from '../../atoms/Text/Text'
import ProfItem from '../../organisms/ProfItem/ProfItem'
import SubmissionItem from '../../organisms/SubmissionItem/SubmissionItem'
import TextViewer from '../../molecules/TextViewer/TextViewer'
import colorScheme from '../../../../misc/colorScheme'
import { userProfileTexts } from '../../../../misc/texts/userProfileText'
import { userService } from '../../../../misc/services/userService'
import { fileService } from '../../../../misc/services/fileService'

const ProfilePage = () => {
  const [userFullName, setUserFullName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [submissionsArray, setSubmissionsArray] = useState([])
  const [sOther, setSOther] = useState([])

  useEffect(() => {
    userService.fetchUserData(localStorage.getItem('token'))
      .then(response => {
        setUserFullName(JSON.parse(response).full_name)
        setUserEmail(JSON.parse(response).email)
        fileService.getSubmissions(localStorage.getItem('userId'), localStorage.getItem('token'))
          .then(response => {
            var buf = JSON.parse(response)
            buf.sort((a, b) => {
              return parseFloat(a.id) - parseFloat(b.id)
            })
            setSubmissionsArray(buf)
          })
          .catch(error => {
            console.log(error)
          })
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <ProfilePageStyled>
      <div
        style = {{
          gridColumn: '1/3',
          height: '100px',
          backgroundColor: colorScheme.steel,
          color: colorScheme.marigold,
          lineHeight: '100px',
          textAlign: 'center'
        }}
      >
        <Text
          size = { 'large' }
        >
          Hello { userFullName }
        </Text>
      </div>
      <div
        style = {{
          backgroundColor: colorScheme.denim,
          margin: '50px',
        }}
      >
        <Tip
          width = { '50%' }
          height = { '300px' }
          value = { 'Hi, this is your profile. All the data you’ve submitted will display here, including files and responses.' }
          additionalStyles = { 'margin-top: 50px;' }
        />
        <TextViewer
          childrenData = { userProfileTexts.userProfileTextGenerator(userFullName, userEmail) }
          notDescription = { true }
          additionalStyles = { 'text-align: left; margin-left: 50px; margin-right: 50px; margin-top: 50px; height: fit-content; overflow: hidden;' }
        />
      </div>
      <div>
        <div
          style = {{ minHeight: '700px', border: '5px solid ' + colorScheme.steel, marginTop: '50px', marginRight: '50px' }}
        >
          <List
            heightParameter = { '600px' }
            onScrollCallback = { e => console.log('asdf') }
          >
            { submissionsArray.map((item, index) => {
              return (
              <SubmissionItem
                id = { item.id }
                key = { index }
                abstract = { item.abstract }
                number = { index }
                documents = { item.documents }
              />
              )
            }) }
          </List>
        </div>
      </div>
    </ProfilePageStyled>
  )
}

export default ProfilePage
