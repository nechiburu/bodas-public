import React from "react";
import Slider from "react-slick";
import { Destinos } from '../../api/destino'
import Link from 'next/link'
import Image from "next/image";
import SectionTitle from '../../components/SectionTitle';


const Lunamiel = (props) => {

    var settings = {
        dots: false,
        arrows: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (

        <section className={`wpo-service-section ${props.pbClass}`}>
            <div className="container">
                <SectionTitle topTitle={'Seguro que el día de tu boda es inolvidable, pero también lo será el viaje que realicen juntos después y más si eligen alguno de estos increíbles destinos'} MainTitle={''} />
                <div className="wpo-service-active owl-carousel">
                    <Slider {...settings}>
                        {Destinos.map((destino, sitem) => (
                            <div className="wpo-service-item" key={sitem}>
                                <div className="wpo-service-img">
                                    <Image src={destino.simg1} alt="" />
                                    <div className="wpo-service-text">
                                        <div className="s-icon">
                                            <Image src={destino.fIcon1} alt="Icono" width={20} height={20} />
                                        </div>
                                        <h4>{destino.title}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default Lunamiel;