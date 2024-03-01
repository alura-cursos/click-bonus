import styled from "styled-components";

const Input = styled.input`
    border: 1px solid;
    border-color: ${props => props.$erro ? 'red' : '#DCDCDC '}

`


export default Input