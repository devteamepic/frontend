import styled from 'styled-components'
import colorScheme from '../../../misc/colorScheme'

const additionalStyles = `
  height: 350px;
`

const ProfItemStyled = styled.li`
height: 150px;
min-width: fit-content;
background-color: ${ props => colorScheme.steel };
color: ${ props => colorScheme.marigold };
border: 5px solid ${ props => colorScheme.marigold };
margin: 0 20px 20px 20px;
padding: 20px 20px 0 20px;
box-sizing: border-box;
display: grid;
grid-template-columns: 90px 175px 75px 50px;
${ props => props.shouldExpand && additionalStyles }
`

export default ProfItemStyled
