import styled from 'styled-components'
import colorScheme from '../../../misc/colorScheme'

const additionalStyles = `
  height: 700px;
  grid-template-rows: 50px 50px auto;
`

const SubmissionItemStyled = styled.li`
height: fit-content;
width: 100%;
background-color: ${ colorScheme.steel };
margin: 10px;
padding: 10px;
box-sizing: border-box;
display: grid;
grid-template-columns: 90% auto;
grid-template-rows: auto auto;
grid-auto-flow: column;
${ props => props.shouldExpand && additionalStyles }
`

export default SubmissionItemStyled
