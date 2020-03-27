import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import TextViewer from '../../molecules/TextViewer/TextViewer'
import ErrorDialog from '../../organisms/ErrorMessageDialog/ErrorMessageDialog'
import LoginForm from '../../organisms/LoginForm/LoginForm'
import colorScheme from '../../../../misc/colorScheme'
import LoginPageStyled from '../../../styled/pages/loginPageStyled'

const LoginPage = ({ error, ...props }) => {
    const [errorMessage, setErrorMessage] = useState(error)
    const [some] = useState([
      { component: 'text', size: 'large', textValue: 'UNIFOUND', isHeader: true },
      { component: 'text', size: 'medium', textValue: 'was created using ' },
      { component: 'link', link: '/openSourceWiki', textValue: 'open source' },
      { component: 'text', size: 'medium', textValue: ' technologies such as: ' },
      { component: 'link', link: '/openSourceWiki', textValue: 'arxiv.org' },
      { },
      { component: 'text', size: 'medium', textValue: 'If you are developer we welcome you to our ' },
      { component: 'link', link: '/openSourceWiki', textValue: 'github' },
      { component: 'text', size: 'medium', textValue: '. We will be happy to answer you questions!' },
    ])

    useEffect(() => {
        setErrorMessage(error)
    }, [error])

    return (
        <LoginPageStyled
          colorScheme = { colorScheme }
        >
          { errorMessage && <ErrorDialog/> }
          <div style={{ height: '100%', width: '100%', backgroundColor: colorScheme.denim }}>
            <TextViewer childrenData={some}/>
          </div>
          <LoginForm
            colorScheme = { colorScheme }
          />
        </LoginPageStyled>
    )
}

const mapStateToProps = (state) => {
    return { error: state.validationErrorMessage }
}

export default connect(mapStateToProps) (LoginPage)
