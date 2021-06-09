import React from 'react'
import { Hero, Title } from './HeroSection.style'
import Logo from '../images/LeagueLogo.svg'

const HeroSection = ({searchInput, setSearchInput, photoArray}) => {
    const [display, setDisplay] = React.useState(false)
    
    const setSelected = (title) => {
        setDisplay(!display)
        setSearchInput(title)
    }

    const displayTitle = (title) => {
        const titleVar = title
        const titleSplit = titleVar.split(' ')
        const word = searchInput
        let startIndex = 0
        let endIndex = 0
        
        for (const wordSplit of titleSplit) {
            if (wordSplit.includes(word)) {
                console.log(wordSplit)
                startIndex = titleVar.search(wordSplit)
                endIndex = wordSplit.length
            }
        }

        return <p>{titleVar.substr(0, startIndex)}<i>{titleVar.substr(startIndex, endIndex)}</i>{titleVar.substr(endIndex+startIndex)}</p>
    }

    const options = photoArray?.filter(({title}) => title.indexOf(searchInput) > -1).map(photoArray => 
        <div onClick={() => setSelected(photoArray.title)} 
            className="options" 
            key={photoArray.id}
        >
            {displayTitle(photoArray.title)}
        </div>
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
