import React from "react";

// Import React carousel components
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const ImageSlider: React.FC = ({ bannerImage }: any) => {
    console.log('object', bannerImage.length)

    return (
        <>
            <CarouselProvider
                className="carousel-size"
                naturalSlideWidth={500}
                naturalSlideHeight={250}
                totalSlides={bannerImage.length}

            >        <Slider>

                    <Slide index={bannerImage.length}><img src={bannerImage} /></Slide>
                </Slider>
            </CarouselProvider>

        </>
    )
}

export default ImageSlider
