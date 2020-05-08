import styled from 'styled-components'
import colorScheme from '../../../misc/colorScheme'

const additionalStyles = `
  grid-template-rows: 50px 50px auto;
`

const SubmissionItemStyled = styled.li`
height: fit-content;
width: 70%;
background-color: ${ colorScheme.steel };
margin: auto;
padding: 10px;
display: grid;
grid-template-columns: 90% auto;
grid-template-rows: auto auto;
grid-auto-flow: column;
${ props => props.shouldExpand && additionalStyles }
`

export default SubmissionItemStyled
