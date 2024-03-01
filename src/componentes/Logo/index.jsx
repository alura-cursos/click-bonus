import styled from "styled-components";

import logo from './logo.png'

const StyledImg = styled.img`


`


const Logo = () => {
    return (<figure>
        <StyledImg src={logo} />
    </figure>)
}

export default Logo