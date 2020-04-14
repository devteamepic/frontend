import React from 'react'
import HomePageStyled from '../../../styled/pages/homePageStyled'
import colorScheme from '../../../../misc/colorScheme'
import Text from '../../atoms/Text/Text'
import Input from '../../atoms/Input/Input'
import DragAndDrop from '../../atoms/DragAndDrop/DragAndDrop'
import List from '../../organisms/List/List'
import FileItem from '../../molecules/FileItem/FileItem'
import ProfItem from '../../molecules/ProfItem/ProfItem'
import CheckboxMessage from '../../molecules/CheckboxMessage/CheckboxMessage'

const HomePage = () => {
    return (
        <HomePageStyled
          colorScheme = { colorScheme }
        >
          <div>
            <div style={{ height: '80%', width: '80%', textAlign: 'center', margin: '10%'}}>
              <Text
                size = 'large'
              >
                Drop your files here
              </Text>
              <div style={{ height: '100px' }}/>
              <div style={{ height: '500px' }}>
                <DragAndDrop
                  height = '500px'
                />
              </div>
              <div style={{ marginTop: '10%' }}>
                <CheckboxMessage
                  textColor = 'watermelon'
                >
                  I give my concern to UNIFOUND to process my thesis
                </CheckboxMessage>
              </div>
            </div>
          </div>
          <div style={{ backgroundColor: colorScheme.denim, color: 'white' }}>
            <div style={{ height: '80%', width: '80%', margin: '10%' }}>
              <div style={{ textAlign: 'center' }}>
                <Text
                  size = 'large'
                >
                  Edit here
                </Text>
              </div>
              <List
                color = 'steel'
              >
                <FileItem
                  fileObject = {{
                      name: 'asdf',
                    size: 'asdf'
                  }}
                />
                <FileItem
                  fileObject = {{
                      name: 'asdf',
                    size: 'asdf'
                  }}
                />
                <FileItem
                  fileObject = {{
                      name: 'asdf',
                    size: 'asdf'
                  }}
                />
                <FileItem
                  fileObject = {{
                      name: 'asdf',
                    size: 'asdf'
                  }}
                />
                <FileItem
                  fileObject = {{
                      name: 'asdf',
                    size: 'asdf'
                  }}
                />
              </List>
            </div>
          </div>
          <div style={{ backgroundColor: colorScheme.steel }}>
            <div style={{ height: '90%', width: '80%', margin: '5% 10% 0 10%' }}>
              <div
                style = {{ textAlign: 'center', height: '100px' }}
              >
              <Input
                type = { 'submit' }
                height = '100%'
              />
              </div>
              <List
                color = 'denim'
                margin = 'calc(5% - 5px)'
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
        </HomePageStyled>
    )
}

export default HomePage
