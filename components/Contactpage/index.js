import React from 'react';
import ContactForm from '../ContactFrom'


const Contactpage = () => {

    return(
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
                                            <p>Avenida San Martin &, Dr. Alejandro Ramirez, Santa Cruz de la Sierra</p>
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
                                            <p>weddings@travelerocorp.com</p>
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
                                            <a href="https://wa.me/59169203728" target="_blank" rel="noopener noreferrer"  style={{ color: '#738ea5' }}>+591 69203728</a>
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
            <section className="wpo-contact-map-section">
                <div className="wpo-contact-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.284456090467!2d-63.19767546499046!3d-17.76163895034323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAvenida%20San%20Martin%20%26%2C%20Dr.%20Alejandro%20Ramirez%2C%20Santa%20Cruz%20de%20la%20Sierra!5e0!3m2!1sen!2sus!4v1624858299605&q=-17.76163895034323%2C-63.19767546499046"></iframe>
                </div>
            </section>
        </section>
     )
        
}

export default Contactpage;
