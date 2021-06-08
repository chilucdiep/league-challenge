import styled from 'styled-components'

export const Hero = styled.div`
    height: 35vh;
    width: 100vw;
    background-color: #F9F7F6;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    & .watermark {
        width: 45%;
        max-width: 500px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        opacity: 0.17;
        z-index: 0;
    }

    & .input-container {
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        & #search-input {
            width: 45%;
            height: 2.8em;
            outline: none;
            border: none;
            background-color: #E2DDEE;
            padding: 1em;
            border-radius: .6em;
            position: relative;
            z-index: 2;
            top: 10em;
            color: #260E55;
            opacity: .85;
        }

        & #search-input::placeholder {
            color: #7F65B0;
        }

        & .options-container {
            width: 45%;
            height: 200px;
            overflow-y: scroll;
            overflow-x: scroll;
            background-color: #ffffff;
            position: absolute;
            top: 480%;

            & .options {
                padding: .4em 1.5em;

                &:hover {
                    cursor: pointer;
                    background-color: #ECEAF1;
                }
            }
        }
    }


    @media screen and (min-width: 600px) {
        height: 78vh;
    }
`

export const Title = styled.h1`
    font-size: 2rem;
    text-align: center;
    width: 280px;
    font-weight: 700;

    @media screen and (min-width: 600px) {
        font-size: 5rem;
        width: 680px;
    }
`