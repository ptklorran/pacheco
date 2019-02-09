import React, { Component } from "react"
import Slider from "react-slick"

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: false,
            fade: true
        };
        return (
            <div>
                <Slider {...settings}>
                    <div>
                        <img style={{ width: '100%' }} src="http://nemflash.io/wp-content/uploads/2017/07/PacNEM-e1501350372458.jpg" alt="slide" />
                    </div>
                </Slider>
            </div>

        )
    }
}
