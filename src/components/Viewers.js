import React from 'react'
import styled from 'styled-components'

function Viewers() {
  return (
    <Container>
        <Wrap>
            <div className='border' />

            <img src='/images/viewers-disney.png' alt=''/>

            <video autoPlay muted loop>
                <source src="/videos/disney.mp4" type="video/mp4" />
            </video>
        </Wrap>
        <Wrap>
            <div className='border' />

            <img src='/images/viewers-pixar.png' alt=''/>

            <video autoPlay muted loop>
                <source src="/videos/pixar.mp4" type="video/mp4" />
            </video>
        </Wrap>
        <Wrap>
            <div className='border' />

            <img src='/images/viewers-marvel.png' alt=''/>

            <video autoPlay muted loop>
                <source src="/videos/marvel.mp4" type="video/mp4" />
            </video>
        </Wrap>
        <Wrap>
            <div className='border' />

            <img src='/images/viewers-starwars.png' alt=''/>

            <video autoPlay muted loop>
                <source src="/videos/star-wars.mp4" type="video/mp4" />
            </video>
        </Wrap>
        <Wrap>
            <div className='border' />

            <img src='/images/viewers-national.png' alt=''/>

            <video autoPlay muted loop>
                <source src="/videos/national-geographic.mp4" type="video/mp4" />
            </video>
        </Wrap>
    </Container>
  )
}

export default Viewers


// Styled Components
const Container = styled.div `
    margin-top: 30px;
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr));
`

const Wrap = styled.div `
    cursor: pointer;
    position: relative;
    background: linear-gradient(0deg, #1e1f2a 0%, #2f313d 67%);
    border-radius: 0.7rem;
    box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px, 
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 0.3s;

    .border {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        border: 3px solid #42444f;
        border-radius: 0.7rem;
        box-sizing: border-box;
        background-clip: border-box;
        z-index: 10;
        transition: all 0.3s;
        pointer-events: none;
    }

    img {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 1;
    }

    video {
        opacity: 0;
        width: 100%;
        object-fit: cover;
        min-width: 100%;
        min-height: 100%;
        border-radius: 0.7rem;
        object-fit: cover;
        transition: all 0.3s;
    }

    &:hover {
        transform: scale(1.05);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, 
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;

        .border {
            border: 3px solid rgba(255, 255, 255, 0.7);
        }

        video {
            opacity: 100;
        }
    }
`