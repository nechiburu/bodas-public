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
                <SectionTitle topTitle={'Fondo Mielero'} MainTitle={'¿Cómo funciona?'} />
                <div className="wpo-service-wrap">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="wpo-service-item">
                                <div className="wpo-service-text">
                                    <div className="s-icon">
                                        <img src='/images/service/internet.png' alt="Icono" />
                                    </div>
                                    <h3>Planificación</h3>
                                    <p style={{ color: 'white' }}>.</p>
                                    <p>Los invitados pueden confirmar su asistencia directamente a través del
                                        sitio web de su boda. Sin envío. Sin complicaciones.</p>                                    
                                    <p style={{ color: 'white' }}>.</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="wpo-service-item">
                                <div className="wpo-service-text">
                                    <div className="s-icon">
                                        <img src='/images/service/calendar.png' alt="Icono" />
                                    </div>
                                    <h3>Itinerario de Bodas</h3>
                                    <br></br><br></br>
                                    
                                    <p>Publique su itinerario para ayudar a los invitados a
                                        planificar las actividades de su boda.</p>
                                    <br></br><br></br>
                                </div>

                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="wpo-service-item">
                                <div className="wpo-service-text">
                                    <div className="s-icon">
                                        <img src='/images/service/send.png' alt="Icono" />
                                    </div>
                                    <h3>Compartir con tus Invitados</h3>
                                    <p>Es fácil compartir el sitio web de su boda con amigos y familiares
                                        para que puedan permanecer conectados a su registro, álbum de
                                        fotos e información de la boda.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <Link href="/" className="theme-btn-s3">Volver al Inicio</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Info;