import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import eimg from '/public/images/error.jpg'


const Error = (props) => {
    return(
        <section className="error-404-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="content clearfix">
                            <div className="error">
                                <Image src={eimg} alt=""/>
                            </div>
                            <div className="error-message">
                                <h3>¡Oops! ¡Página no encontrada!</h3>
                                <p>Lo sentimos, pero parece que no se pudo encontrar la pagina solicitada. 
                                    Esto pudo deberse a que ingresaste una dirección incorrecta.</p>
                                <Link href="/" className="theme-btn-s3">Volver al Inicio</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Error;