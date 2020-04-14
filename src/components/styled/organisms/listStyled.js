import styled from 'styled-components'

const ListStyled = styled.ul`
list-style-type: none;
margin: 0;
padding: 20px 0 1px 0;
box-sizing: border-box;
background-color: ${ props => props.backgroundColor };
width: 500px;
height: 700px;
overflow: auto;
scrollbar-width: none;
-ms-overflow-style: none;
&::-webkit-scrollbar {
display:none;
}
`

export default ListStyled
