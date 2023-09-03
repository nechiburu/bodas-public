import React from "react";
import Slider from "react-slick";
import Link from 'next/link'




const Hero = () => {

    var settings = {
        dots: false,
        arrows: true,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        fade: true
    };

    return (
        <section className="wpo-hero-slider">
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    <Slider {...settings}>
                        <div className="hero-slide">
                            <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'images/slider/slide.jpeg'})` }}>
                                <div className="container-fluid">
                                    <div className="slide-content">
                                        <div className="slide-title">
                                            <h2>TU DIA INOLVIDABLE</h2>
                                        </div>
                                        <div className="slide-text">
                                            <p>¡Bienvenidos! Únete a nosotros para celebrar el amor
                                                verdadero.</p>
                                        </div>
                                        <div className="clearfix"></div>
                                        <div className="slide-btns">
                                            <Link href="/about" className="theme-btn">Conocer Más</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hero-slide">
                            <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${'images/slider/slide2.jpg'})` }}>
                                <div className="container-fluid">
                                    <div className="slide-content">
                                        <div className="slide-title">
                                            <h2>TU DIA INOLVIDABLE</h2>
                                        </div>
                                        <div className="slide-text">
                                            <p>¡Bienvenidos! Únete a nosotros para celebrar el amor
                                                verdadero.</p>
                                        </div>
                                        <div className="clearfix"></div>
                                        <div className="slide-btns">
                                            <Link href="/about" className="theme-btn">Conocer Más</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default Hero;