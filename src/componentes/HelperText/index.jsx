import styled from "styled-components";

const HelperText = styled.p`

    color: ${ props => props.$type === 'error' ? 'red' : 'green' }
    
`


export default HelperText