import styled from 'styled-components'
import colorScheme from '../../../misc/colorScheme'

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
`

export default SubmissionItemStyled
