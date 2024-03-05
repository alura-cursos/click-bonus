import styled from "styled-components";

const Input = styled.input`
  height: 3.5rem;
  align-self: stretch;

  border-radius: 0.5rem;
  border: 1px solid  #DCDCDC;
  background: #FFF;
  box-shadow: 2px 2px 4px 0px rgba(21, 69, 128, 0.10);

  font-family: Inter;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  padding-left: .5rem;

  &:active {
    border: #1875E9; 
  }
`
export default Input