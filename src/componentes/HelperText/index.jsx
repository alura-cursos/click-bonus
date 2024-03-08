import styled from "styled-components";

const HelperText = styled.p`
    font-family: Inter;
    font-size: 1rem;
    font-weight: bold;
    color: ${ props => props.$type === 'error' ? '#FF0000' : 'green' }
    
`

export default HelperText

