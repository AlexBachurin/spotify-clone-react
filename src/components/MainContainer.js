import React from 'react'
import styled from 'styled-components'
import Banner from './Banner'
const MainContainer = () => {
    return (
        <Wrapper>
            <Banner />
        </Wrapper>
    )
}

const Wrapper = styled.section`
    height: 100vh;
    z-index: 1;
    flex-grow: 1;
    backdrop-filter: blur(10px);
    background: rgba(34,34,34, 0.6);
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    
`
export default MainContainer