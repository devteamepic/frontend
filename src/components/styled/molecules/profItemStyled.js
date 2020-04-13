import styled from 'styled-components'

const ProfItemStyled = styled.li`
height: 150px;
background-color: ${ props => props.colorScheme.steel };
color: ${ props => props.colorScheme.marigold };
border: 5px solid ${ props => props.colorScheme.marigold };
margin: 0 20px 20px 20px;
padding: 20px 20px 0 20px;
box-sizing: border-box;
display: grid;
grid-template-columns: 110px 250px auto;
`

export default ProfItemStyled
