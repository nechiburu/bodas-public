import React from "react";
import Slider from "react-slick";
import { Services } from '../../api/service'
import Link from 'next/link'
import Image from "next/image";
import SectionTitle from '../../components/SectionTitle';


const ServiceSection = (props) => {

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
                <SectionTitle topTitle={'Destinos'} MainTitle={'Algunos destinos para tu boda perfecta'} />
                <div className="wpo-service-active owl-carousel">
                    <Slider {...settings}>
                        {Services.map((service, sitem) => (
                            <div className="wpo-service-item" key={sitem}>
                                <div className="wpo-service-img">
                                    <Image src={service.simg1} alt="" />
                                    <div className="wpo-service-text">
                                        <div className="s-icon">
                                            <Image src={service.fIcon1} alt="Icono" width={20} height={20} />
                                        </div>
                                        <Link onClick={ClickHandler} href='/service/[slug]' as={`/service/${service.slug}`}>{service.title}</Link>
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

export default ServiceSection;