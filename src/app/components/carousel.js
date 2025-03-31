"use client";
import Image from 'next/image';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import carousel_img1 from '../../../public/images/carousel_img1.jpg';
import carousel_img2 from '../../../public/images/carousel_img2.jpg';
import carousel_img3 from '../../../public/images/carousel_img3.jpg';
import '../../../public/sass/pages/carouselCom.scss';


const CarouselCom = (props) => {
    const {
        fade,
        variant
    } = props
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel variant={variant} interval={null} activeIndex={index} onSelect={handleSelect} fade={fade}>
            <Carousel.Item>
                <div className='img_area'>
                    <Image
                        src={carousel_img1}
                        alt='...'
                        priority="low"
                    />
                </div>
                <Carousel.Caption>
                    <h3>First slide</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className='img_area'>
                    <Image
                        src={carousel_img2}
                        alt='...'
                        priority="low"
                    />
                </div>
                <Carousel.Caption>
                    <h3>Second slide</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className='img_area'>
                    <Image
                        src={carousel_img3}
                        alt='...'
                        priority="low"
                    />
                </div>
                <Carousel.Caption>
                    <h3>Third slide</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselCom;