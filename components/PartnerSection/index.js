import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import pimg1 from '/public/images/partners/hotel1.png'
import pimg2 from '/public/images/partners/hotel2.png'
import pimg3 from '/public/images/partners/hotel3.png'
import pimg4 from '/public/images/partners/hotel4.png'
import pimg5 from '/public/images/partners/hotel5.png'
import pimg6 from '/public/images/partners/hotel6.png'
import pimg7 from '/public/images/partners/hotel7.png'
import pimg8 from '/public/images/partners/hotel8.png'

const partners = [
    {
        pImg: pimg1,
    },
    {
        pImg: pimg2,
    },
    {
        pImg: pimg3,
    },
    {
        pImg: pimg4,
    },
    {
        pImg: pimg5,
    },
    {
        pImg: pimg6,
    },
    {
        pImg: pimg7,
    },
    {
        pImg: pimg8,
    },
]


const PartnerSection = (props) => {
    var settings = {
        dots: false,
        arrows: false,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
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

    return (

        <section className={`wpo-partners-section ${props.tNone}`}>
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="partner-grids partners-slider owl-carousel">
                            <Slider {...settings}>
                                {partners.map((partner, pitem) => (
                                    <div className="grid" key={pitem}>
                                        <Image src={partner.pImg} alt="" />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PartnerSection;