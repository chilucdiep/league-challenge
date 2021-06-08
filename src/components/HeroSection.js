import React from 'react'
import { Hero, Title } from './HeroSection.style'
import Logo from '../images/LeagueLogo.svg'

const HeroSection = ({searchInput, setSearchInput, photoArray}) => {
    const [display, setDisplay] = React.useState(false)
    const setSelected = (title) => {
        setDisplay(!display)
        setSearchInput(title)
    }

    const options = photoArray?.map(photoArray => 
        <div onClick={() => setSelected(photoArray.title)} className="options">{photoArray.title}</div>
    )

    return (
        <Hero>
                <Title>Welcome to your photo albums</Title>
                <img src={Logo} className="watermark"></img>
                <div className="input-container">
                    <input 
                        type="text" id="search-input" 
                        value={searchInput}
                        onClick={() => setDisplay?.(display => !display)} 
                        placeholder="Search the title of a photo..." 
                        onChange={(e) => setSearchInput(e.target.value)}
                    ></input>
                    {display && (
                        <div className="options-container">{options}</div>
                    )}
                </div>
        </Hero>
    )
}

export default HeroSection
