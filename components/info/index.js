import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import Link from 'next/link'


const Info = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className={`wpo-service-section-s2 section-padding ${props.sSClass}`}>
            <div className="container">
                <SectionTitle topTitle={<div>
                    <p>Te presentamos una alternativa para tu Luna de Miel,
                        el día de tu boda, puedes contar con una mesa de regalos
                        convencional y ahora con nuestro Fondo Mielero que los llevará
                        hasta su Luna de Miel.</p>
                    <p>En un espacio creado para ustedes, una vez de elegir tu paquete de Luna
                        de Miel,  pueden seleccionar las actividades o regalos que les gustaría
                        recibir de sus invitados.</p>
                    <p>Sus invitados pueden ser parte de este momento tan  especial para ustedes
                        obsequiándoles este un mágico viaje.</p>
                </div>} />
                < div className="wpo-service-wrap" >
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="wpo-service-item">
                                <div className="wpo-service-text">
                                    <div className="s-icon">
                                        <img src='/images/service/internet.png' alt="Icono" />
                                    </div>
                                    <h3>Armamos tu Viaje a Medida</h3>
                                    <p>Uno de nuestros Asesores especialistas te presentará
                                        diferentes opciones para una experiencia única para ustedes,
                                        vacaciones de playa, aventura, cultura, diversión
                                        y más aventuras</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="wpo-service-item">
                                <div className="wpo-service-text">
                                    <div className="s-icon">
                                        <img src='/images/service/send.png' alt="Icono" />
                                    </div>
                                    <h3>Preparamos tu Fondo Mielero</h3>
                                    <p style={{ color: 'white' }}>.</p>
                                    <p>Armamos tu sitio personalizado para compartir con tus invitados,
                                        y que permita que puedan seleccionar los regalos deseados</p>
                                    <p style={{ color: 'white' }}>.</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="wpo-service-item">
                                <div className="wpo-service-text">
                                    <div className="s-icon">
                                        <img src='/images/service/suitcases.png' alt="Icono" />
                                    </div>
                                    <h3>Alistamos las maletas</h3>
                                    <br></br><br></br>
                                    <br></br>
                                    <p>Cuantificamos los regalos, nos preparamos para iniciar
                                        nuestro viaje, te acompañaremos de inicio a fin.</p>
                                    <br></br>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <Link href="/" className="theme-btn-s3">Volver al Inicio</Link>
                    </div>
                </div >
            </div >
        </section >
    )
}

export default Info;