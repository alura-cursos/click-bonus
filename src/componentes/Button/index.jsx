import styled from "styled-components";

const Button = styled.button`
  border: none;
  color: #FFF;
  text-align: center;
  white-space: nowrap;
  font-family: Inter;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.75rem;

  display: flex;
  padding: 1rem 9.5rem;
  margin: 0 10px 0;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  align-self: stretch;

  border-radius: 0.5rem;
  background: #144480;
  cursor: pointer;
  transition: 0.7s;

  &:hover {
    background-color: #1875E9;
  }

  &:active {
    background-color: #003d80; 
  }
`;

export default Button