import React from 'react';
import ContactForm from '../ContactFrom'


const Contactpage = () => {

    return (
        <section className="wpo-contact-pg-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-10 offset-lg-1">
                        <div className="office-info">
                            <div className="row">
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <i className="fi flaticon-maps-and-flags"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Dirección</h2>
                                            <h6>Santa Cruz:</h6>
                                            <p>Equipetrol, Ave. San Martín y Dr. Alejandro Ramirez</p>
                                            <h6>Cochabamba:</h6>
                                            <p>Torres América Norte Mezzanine, Ave. América 
                                                y Pando lado IC Norte</p>
                                            <h6>La Paz:</h6>
                                            <p>Calacoto, Ave. Ballivián y Calle 12 Edificio Peñaloza 
                                                sobre Show Room Audi</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <i className="fi flaticon-email"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Correo</h2>
                                            <br></br><br></br><br></br>
                                            <p style={{ color: 'white' }}>.</p>
                                            <p style={{ color: 'white' }}>.</p>                                            
                                            <p>weddings@viajestravelero.com</p>
                                            <p style={{ color: 'white' }}>.</p>
                                            <p style={{ color: 'white' }}>.</p>
                                            <p style={{ color: 'white' }}>.</p>
                                            <br></br><br></br>
                                            <br></br>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <i className="fi flaticon-phone-call"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>WhatsApp</h2>
                                            <br></br><br></br><br></br>
                                            <p style={{ color: 'white' }}>.</p>
                                            <p style={{ color: 'white' }}>.</p>   
                                            <a href="https://wa.me/59169203728" target="_blank" rel="noopener noreferrer" style={{ color: '#738ea5' }}>+591 69203728</a>
                                            <p style={{ color: 'white' }}>.</p>
                                            <p style={{ color: 'white' }}>.</p>
                                            <p style={{ color: 'white' }}>.</p>
                                            <p style={{ color: 'white' }}>.</p> 
                                            <br></br><br></br>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="wpo-contact-title">
                            <h2>Have Any Question?</h2>
                            <p>It is a long established fact that a reader will be distracted
                                content of a page when looking.</p>
                        </div> */}
                        {/* <div className="wpo-contact-form-area">
                            <ContactForm/>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Contactpage;
