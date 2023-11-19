import React from 'react'
import FirstSection from '../sections/FirstSection'
import SecondSection from '../sections/SecondSection'
import ThirdSection from '../sections/ThirdSection'
import FourthSection from '../sections/FourthSection'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    scroll-behavior: smooth;

    div {
        scroll-snap-align: start;
        width: 100%;
        height: 100vh;
        font-size: 5em;
        font-family: sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: transform 1s ease;
    }
`

const Sections = () => {

    return (
        <Container>
            <FirstSection />
            <SecondSection />
            <ThirdSection />
            <FourthSection />
        </Container>
    )
}

export default Sections