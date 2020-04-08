import styled from 'styled-components'

const FileItemStyled = styled.li`
height: 150px;
background-color: ${ props => props.colorScheme.denim };
color: white;
margin: 0 20px 20px 20px;
padding: 20px 20px 0 20px;
box-sizing: border-box;
display: grid;
grid-template-columns: 110px auto auto;
`

export default FileItemStyled
