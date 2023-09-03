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
                                <h2>Tu Compañero Ideal para Bodas de Ensueño: Travelero Weddings</h2>
                                <p>En el maravilloso mundo de las bodas, sabemos que cada momento es
                                    especial y único. En Travelero Weddings, entendemos la singularidad
                                    de cada pareja y creemos que su boda debe reflejar a la perfección
                                    su historia de amor. Nuestra misión es convertir tus sueños en
                                    realidad, transportándote a destinos de ensueño donde el amor
                                    florece y cada detalle se convierte en un recuerdo inolvidable.</p>
                                <p>Con una sólida trayectoria en la industria nupcial,
                                    hemos acumulado años de experiencia y conocimiento.
                                    Nuestra oferta incluye una amplia selección de destinos y
                                    servicios diseñados para satisfacer todas tus necesidades y deseos.
                                    Ya sea que sueñes con una boda íntima en la playa, una ceremonia
                                    exótica o una celebración tradicional en una encantadora capilla,
                                    estamos preparados para hacerlo realidad.</p>
                                <h3>Lo que nos hace destacar:</h3>
                                <h5>Destinos Personalizados: </h5>
                                <p>Destinos Personalizados: Trabajamos estrechamente contigo para
                                    crear un entorno que se adapte perfectamente a tu estilo y visión.
                                    Cada detalle, desde la decoración hasta la elección del lugar, se
                                    elige cuidadosamente para que tu boda sea un reflejo auténtico de
                                    tu amor.</p>
                                <h5>Experiencias Compartidas:</h5>
                                <p>Nada es más convincente que escuchar de
                                    aquellos que han vivido la experiencia. Testimonios y relatos de
                                    parejas que ya han confiado en nosotros para su gran día.
                                    Sus historias de éxito son pruebas de nuestro compromiso con
                                    la excelencia.</p>
                                <h5>Regalos Memorables: </h5>
                                <p>Sabemos que los pequeños detalles marcan la
                                    diferencia. Ofrecemos una variedad de opciones para regalos de
                                    invitados que aseguran que cada uno de ellos se lleve un recuerdo
                                    memorable de tu boda. Desde elegantes obsequios personalizados
                                    hasta elementos temáticos que enriquecerán la experiencia de tus
                                    invitados.</p>
                                <p>Además, en Travelero Weddings creemos que las bodas deben ser
                                    experiencias inolvidables desde el primer momento en que comienzan
                                    los preparativos. Por eso, ofrecemos un servicio de asesoramiento
                                    personalizado desde el primer encuentro. Nuestro equipo de expertos
                                    en bodas estará a tu disposición para escuchar tus ideas, entender
                                    tus deseos y convertirlos en un plan de boda a medida.</p>
                                <p>Estamos aquí para hacer que tus sueños se hagan realidad.
                                    Trabajamos en estrecha colaboración contigo para seleccionar
                                    el destino perfecto, los detalles más elegantes y cada elemento
                                    que hará que tu boda sea única.</p>
                                <p>En Travelero Weddings, no solo planificamos bodas, creamos recuerdos
                                    inolvidables. Nuestra dedicación a la excelencia y
                                    nuestra pasión por lo que hacemos se reflejan en cada
                                    celebración que organizamos. Cada pareja que elige confiar
                                    en nosotros encuentra una experiencia sin igual, llena de alegría,
                                    emoción y amor.</p>
                                <p>Permítenos ser tu compañero ideal en este viaje hacia tu boda de
                                    ensueño. Juntos, haremos que tu día especial sea un verdadero
                                    reflejo de tu amor y compromiso, un evento que recordarás con
                                    cariño durante toda tu vida. ¿Estás listo para comenzar este
                                    emocionante viaje con nosotros?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About2;