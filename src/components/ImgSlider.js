import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImgSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1, 
        autoplay: true
    }

  return (
    <Carousel {...settings}>
        <Wrap>
            <img src='/images/slider-badging.jpg' />
        </Wrap>
        <Wrap>
            <img src='/images/slider-badag.jpg' />
        </Wrap>
    </Carousel>
  )
}

export default ImgSlider


// Styled Components
const Carousel = styled(Slider) `
    margin-top: 20px;
    
    button {
        z-index: 1;
    }

    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }

    li.slick-active button::before {
        color: rgb(150, 158, 171);
    }

    .slick-list {
        overflow: visible;
    }
`

const Wrap = styled.div `
    cursor: pointer;
    border: 4px solid rgba(255, 255, 255, 0);

    img {
        width: 100%;
        height: 100%;
        border-radius: 4px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, 
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
        transition: outline 130ms linear 0s;

        &:hover {
            outline: 4px solid rgba(249, 249, 249, 0.8);
        }
    }
`