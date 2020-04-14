import styled from 'styled-components'

const TextStyled = styled.p`
font-size: ${props => props.size};
margin: 0;
font-family: Roboto;
${ props => props.shouldAddNewLine || 'display: inline;' }
width: 100%;
`

export default TextStyled
