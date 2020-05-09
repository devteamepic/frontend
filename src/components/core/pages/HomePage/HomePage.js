import React, { useState } from 'react'
import HomePageStyled from '../../../styled/pages/homePageStyled'
import colorScheme from '../../../../misc/colorScheme'
import TextViewer from '../../molecules/TextViewer/TextViewer'
import Icon from '../../atoms/Icon/Icon'

const HomePage = () => {
    const [homePageText] = useState([
        { component: 'text', size: 'medium', textValue: 'UNIFOUND will compare your diploma contents with our database. Its is not a plaguarism comparison! In fact it will try to match the most related article (by meaning) from our database with content of your diploma.' },
    ])

    return(
        <HomePageStyled>
          <div
            style = {{ backgroundColor: colorScheme.denim, position: 'relative' }}
          >
            <Icon
              additionalStyles = { 'position: absolute; top: 20%; left: 20%; text-align: center;' }
              icon = { 'logo' }
              heightParam = { '60%' }
              widthParam = { '60%' }
            />
          </div>
          <div
            style = {{ backgroundColor: colorScheme.steel }}
          >
            <TextViewer
              childrenData = { homePageText }
              additionalStyles = { 'margin-top: 15%;' }
            />
          </div>
        </HomePageStyled>
    )
}

export default HomePage
