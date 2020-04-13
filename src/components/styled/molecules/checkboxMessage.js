import styled from 'styled-components'

const CheckboxMessageStyled = styled.div`
width: fit-content;
display: grid;
grid-template-columns: 30px auto;
color: ${ props => props.colorScheme[props.color]};
`

export default CheckboxMessageStyled
