import React, { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Gallery, Item } from 'react-photoswipe-gallery';
import PageTitle from '../../components/pagetitle';
import Navbar from '../../components/Navbar';
import Footer from '../../components/footer';
import clienteAxios from '../../api/axios';
import Link from 'next/link';

const MatrimonioPage = (props) => {
    const router = useRouter();
    const [team, setTeam] = useState([]);
    const [projectDetails, setProjectDetails] = useState(null);

    // useEffect para consultar la API
    useEffect(() => {
        // query a la api
        const consultarApi = async () => {
            try {
                const teamConsulta = await clienteAxios.get('/parejas');
                setTeam(teamConsulta.data);

                // Buscar el proyecto correspondiente en la lista de team
                const project = teamConsulta.data.find((item) => item.slug === router.query.slug);
                setProjectDetails(project);
            } catch (error) {
                console.log(error);
            }
        };

        consultarApi();
    }, [router.query.slug]);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    if (!projectDetails) {
        // Puedes mostrar una carga o mensaje mientras se obtienen los datos
        return <p>Cargando...</p>;
    }


    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={projectDetails.title} pagesub={projectDetails.title} />

            <section className="wpo-portfolio-single-section section-padding">
                <div className="container">
                    <div className="portfolio-single-wrap">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-12">
                                <div className="portfolio-single-img">
                                    <img src={`https://back.traveleroweddings.com/${projectDetails.pSimg}`} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-12">
                                <div className="portfolio-single-text">
                                    <h2>{projectDetails.title}</h2>
                                    {/* <span>{projectDetails.location}</span> */}
                                    {/* <p>{projectDetails.desc}</p> */}
                                    <div className="wpo-portfolio-single-content-des">
                                        <ul>
                                            <li>Destino :<span>{projectDetails.location}</span></li>
                                            <br></br><br></br><br></br>
                                            <div style={{ textAlign: 'center' }}>
                                                <Link onClick={ClickHandler} className="theme-btn" href="https://bodas-commerce1-0.vercel.app/">
                                                    <i className=""></i> Regalar
                                                </Link>
                                            </div>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <Footer />
        </Fragment>
    )
};
export default MatrimonioPage;
