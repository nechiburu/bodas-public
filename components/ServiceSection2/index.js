import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import Link from 'next/link'


const ServiceSection2 = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className={`wpo-service-section-s2 section-padding ${props.sSClass}`}>
            <div className="container">
                <SectionTitle topTitle={'Fondo Mielero'} MainTitle={'Regalar'} />
                <div className="wpo-service-wrap">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="wpo-service-item">
                                <div className="wpo-service-text">
                                    <div className="s-icon">
                                        <img src='/images/service/couple.png' alt="Icono" />
                                    </div>
                                    <h3>Listas de Parejas</h3>
                                    <p>Encuentra a la pareja que deseas mandar un regalo.</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="wpo-service-item">
                                <div className="wpo-service-text">
                                    <div className="s-icon">
                                        <img src='/images/service/gift.png' alt="Icono" />
                                    </div>
                                    <h3>Regalos</h3>
                                    <p>Elige los regalos que deseas.</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="wpo-service-item">
                                <div className="wpo-service-text">
                                    <div className="s-icon">
                                        <img src='/images/service/ancient-scroll.png' alt="Icono" />
                                    </div>
                                    <h3>Dedicatoria</h3>
                                    <p>Escribe tu dedicatoria.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <Link href="/home7" className="theme-btn-s3">Regalar</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceSection2;