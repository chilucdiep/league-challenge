import styled from 'styled-components'

export const AlbumGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    margin: 3em;
`

export const Album = styled.div`
    background-color: #ECEAF1;
    padding: 2em;
    width: 100%;
    height: 20em;
    border-radius: .2em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
    text-align: center;
    overflow: hidden;

    & .thumbnail {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1rem;
        margin-bottom: 1em;
    }

    & .thumbnail img {
        width: 80%;
        justify-self: center;
        align-self: center;
        border-radius: .4em;
    }

    @media screen and (min-width: 900px) {
        width: 500px;

        & .thumbnail img {
        width: 44%;
        }
    }
`