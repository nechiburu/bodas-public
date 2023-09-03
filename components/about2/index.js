import React from 'react'
import Image from 'next/image'
import abimg from '../../public/images/about/1.jpeg'
import abimg3 from '../../public/images/about/shape.png'
import abimg4 from '../../public/images/about/thumb.png'


const About2 = (props) => {

    return (
        <section className="wpo-about-section section-padding">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-12 col-12">
                        <div className="wpo-about-wrap">
                            <div className="wpo-about-item">
                                <div className="wpo-about-img">
                                    <Image src={abimg} alt="" />
                                </div>
                            </div>
                            <div className="ab-shape">
                                <Image src={abimg3} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12 col-12">
                        <div className="wpo-about-text">
                            <div className="wpo-about-icon">
                                <div className="icon">
                                    <Image src={abimg4} alt="" />
                                </div>
                            </div>
                            <div className="wpo-about-icon-content">
                                <h2>Tu Compañero Ideal para Bodas de Ensueño</h2>
                                <p>En un día tan especial como es la boda, cada detalle importa.
                                    En TraveleroWeddings, entendemos que cada pareja es única y por ello,
                                    cada boda debería serlo también. Nos dedicamos a transformar tus
                                    visiones en realidad, llevando a cabo bodas en destinos soñados que
                                    reflejen auténticamente la esencia de cada pareja.</p>
                                <p>
                                    Con años de experiencia en el mundo nupcial, contamos con una amplia
                                    gama de destinos y servicios que se adaptan a todas las necesidades y deseos.
                                    Ya sea que busques un lugar íntimo, exótico o tradicional, nos encargamos
                                    de todo para que tú solo tengas que disfrutar de tu día.</p>
                                <ul>
                                    <li>Destinos personalizados que se adaptan a tu estilo y visión.</li>
                                    <li>Testimonios y experiencias de parejas que ya han vivido su gran día con nosotros.</li>
                                    <li>Facilidad de regalos para invitados, asegurando que cada detalle sea memorable.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About2;