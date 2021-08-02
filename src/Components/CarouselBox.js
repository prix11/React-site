import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import sImg from '../Pages/slider1.jpg'
import ssImg from '../Pages/slider2.jpg'

export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel >
                <Carousel.Item>
                    <img 
                    className="d-block w-100"
                    src={sImg}
                    alt="slider"
                    height="892"
                    />
                    <Carousel.Caption>
                        <h3>Slider image</h3>
                        <p>Lorem ipsuma asdasd asd asdas dasdasd
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                    className="d-block w-100"
                    src={ssImg}
                    alt="slider"
                    height="892"
                    />
                    <Carousel.Caption>
                        <h3>Slider image</h3>
                        <p>Lorem ipsuma asdasd asd asdas dasdasd
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                
            </Carousel>
        )
    }
}
