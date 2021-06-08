import styled from 'styled-components'

export const Photo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & h2 {
        margin: 2em 0;
    }

    & img {
        width: 50%;
        margin-bottom: 5em;
    }
`