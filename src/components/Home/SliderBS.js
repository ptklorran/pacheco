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
                        <img style={{ width: '100%' }} src="http://tudo.extra.com.br/imagens/2018/02/gopro_DESTAQUE.jpg" alt="slide" />
                    </div>
                    <div>
                        <img style={{ width: '100%' }} src="https://i2.wp.com/guiadaalma.com.br/wp-content/uploads/2017/02/tambor-tambores-animais-de-poder-jornada-xamanica-guia-da-alma-constelacao-familiar-.jpg?fit=1360%2C600&ssl=1" alt="slide" />
                    </div>
                    <div>
                        <img style={{ width: '100%' }} src="https://guiadaalma.com.br/wp-content/uploads/2017/08/guia-da-alma-numerologia-setembro-coruja.jpg" alt="slide" />
                    </div>
                </Slider>
            </div>

        )
    }
}
