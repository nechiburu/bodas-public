import React, { Component } from 'react'
import Image from 'next/image'
import SectionTitle from '../../components/SectionTitle'
import vec1 from '/public/images/contact/1.png'
import vec2 from '/public/images/contact/2.png'
import clienteAxios from '../../api/axios'
import { toast, ToastContainer } from 'react-toastify'; // Importa ToastContainer y toast
import 'react-toastify/dist/ReactToastify.css'; // Importa los estilos

class RSVP extends Component {


    state = {
        name: '',
        email: '',
        destino: '',
        boda: '',
        presupuesto: '',
        guest: '',
        telefono: '',
        error: {}
    }


    changeHandler = (e) => {
        const error = this.state.error;
        error[e.target.name] = ''

        this.setState({
            [e.target.name]: e.target.value,
            error
        })
    }

    subimtHandler = async (e) => {
        e.preventDefault();

        const { name,
            email,
            destino,
            boda,
            presupuesto,
            telefono,
            guest, error } = this.state;

        if (name === '') {
            error.name = "Por favor ingresa tu nombre";
        }
        if (email === '') {
            error.email = "Por favor ingresa tu correo";
        }
        if (destino === '') {
            error.destino = "Por favor selecciona tu destino deseado";
        }
        if (boda === '') {
            error.boda = "Por favor selecciona tu tipo de boda";
        }
        if (guest === '') {
            error.guest = "Por favor selecciona el número de invitados";
        }
        if (presupuesto === '') {
            error.presupuesto = "Por favor selecciona tu presupuesto";
        }
        if (telefono === '') {
            error.telefono = "Por favor ingresa tu telefono";
        }


        if (error) {
            this.setState({
                error
            })
        }

        if (!error.name && !error.email && !error.boda && !error.destino && !error.presupuesto && !error.guest && !error.telefono) {
            try {
              const response = await clienteAxios.post('/send-email', {
                name,
                email,
                destino,
                boda,
                presupuesto,
                telefono,
                guest,
              });
      
              console.log(response.data); // Puedes mostrar una notificación o manejar la respuesta de acuerdo a tus necesidades
              toast.success('Correo enviado exitosamente')
            } catch (error) {
              console.error(error);
              toast.error('Error al enviar el correo')
            }
      
            this.setState({
              name: '',
              email: '',
              destino: '',
              boda: '',
              presupuesto: '',
              telefono: '',
              guest: '',
              error: {},
            });
          }
        };

    render() {
        const { name,
            email,
            destino,
            boda,
            guest,
            presupuesto,
            telefono,
            error } = this.state;

        return (
            <section className="wpo-contact-section section-padding" id="RSVP">
                <div className="container">
                    <div className="wpo-contact-section-wrapper">
                        <div className="wpo-contact-form-area">
                            <SectionTitle topTitle={'Conozcámonos'} MainTitle={'Realiza una Consulta'} />
                            <form onSubmit={this.subimtHandler} className="form">
                                <div className="row">
                                    <div>
                                        <div className="form-field">
                                            <input value={name} onChange={this.changeHandler} className="form-control" type="text" name="name" placeholder="Nombre" />
                                            <p>{error.name ? error.name : ''}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="form-field">
                                            <input onChange={this.changeHandler} value={email} type="email" className="form-control" name="email" placeholder="Email" />
                                            <p>{error.email ? error.email : ''}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="form-field">
                                            <input value={telefono} onChange={this.changeHandler} className="form-control" type="number" name="telefono" placeholder="Telefono" />
                                            <p>{error.telefono ? error.telefono : ''}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <select name="destino" className="form-control" value={destino} onChange={this.changeHandler}>
                                            <option disabled value="">
                                                Seleccionar destino
                                            </option>
                                            <option>Cancun</option>
                                            <option>Punta Cana</option>
                                            <option>Jamaica</option>
                                            <option>Riviera Maya</option>
                                            <option>Tulum</option>
                                            <option>Otro</option>

                                        </select>
                                        <p>{error.destino ? error.destino : ''}</p>
                                    </div>
                                    <div>
                                        <select name="boda" className="form-control" value={boda} onChange={this.changeHandler}>

                                            <option disabled value="">
                                                Seleccionar tipo  de boda
                                            </option><option>Simbolica</option>
                                            <option>Religiosa</option>
                                            <option>Legal</option>
                                        </select>
                                        <p>{error.boda ? error.boda : ''}</p>
                                    </div>
                                    <div>
                                        <div className="form-field">
                                            <input onChange={this.changeHandler} value={guest} type="number" className="form-control" name="guest" placeholder="Invitados" />
                                            <p>{error.guest ? error.guest : ''}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <select name="presupuesto" className="form-control last" value={presupuesto} onChange={this.changeHandler}>
                                            <option disabled value="">
                                                Seleccionar el presupuesto por persona disponible
                                            </option>
                                            <option>1300 -1500</option>
                                            <option>1500-1800</option>
                                            <option>1800-2200</option>
                                            <option>2200 o superior</option>
                                        </select>
                                        <p>{error.presupuesto ? error.presupuesto : ''}</p>
                                    </div>
                                    <div className="submit-area">
                                        <div className="form-submit">
                                            <button type="submit" className="theme-btn-s3">Enviar Mensaje</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="border-style"></div>
                        </div>
                        <div className="vector-1">
                            <Image src={vec1} alt="" />
                        </div>
                        <div className="vector-2">
                            <Image src={vec2} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}
export default RSVP;