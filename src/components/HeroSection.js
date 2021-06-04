import React from 'react'
import { Hero, Title } from './HeroSection.style'
import Logo from '../images/LeagueLogo.svg'

const HeroSection = () => {
    return (
        <Hero>
                <Title>Welcome to your photo albums</Title>
                <img src={Logo} className="watermark"></img>
                <input type="text" id="search-input" placeholder="Search the title of a photo..."></input>
        </Hero>
    )
}

export default HeroSection
