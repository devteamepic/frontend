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
            setSubmissionsArray(JSON.parse(response))
          })
          .catch(error => {
            console.log(error)
          })
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    // FUCK IT I WILL HAVE TO REDO WHOLE DESIGN FROM SCRATCH FUCK YOU
    // THIS SHIT IS A FUCKING MESS
    // I CAN T TAKE IT
    // I HAD THE DESIGN, YOUALL AGREED TO FOLLOW IT
    // WHY NOW I HAVE TO REDO SHIT
    // I TOLD YOU LAST WEEL "I AINT GONNA TOUCH FRONT"
    // TO FOCUS ON A PRESENTATION
    // I CANT TAKE IT
    // I HATE IT WITH MY VERY SOUL
    // :(
    submissionsArray.map((item, index) => {
      fileService.getSubmission(localStorage.getItem('userId'), localStorage.getItem('token'), submissionsArray[index].id)
               .then(response => {
                 if (JSON.parse(response).length !== 0) {
                   setSOther([...sOther, JSON.parse(response)])
                 }
               })
               .catch(error => {
                 console.log(error)
               })
    })
  }, [submissionsArray])

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
            { sOther.map((item, index) => (
              <SubmissionItem
                profData = { item }
                key = { index }
                abstract = { submissionsArray[index].abstract }
                number = { index }
                documents = { submissionsArray[index].documents }
              />
            )) }
          </List>
        </div>
      </div>
    </ProfilePageStyled>
  )
}

export default ProfilePage
