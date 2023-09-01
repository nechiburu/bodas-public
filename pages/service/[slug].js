import React, { Fragment } from 'react';
import { useRouter } from 'next/router'
import {Services} from '../../api/service'
import Link from 'next/link'
import ServiceSidebar from './single/sidebar';
import Benefits from './single/benefits';
import PageTitle from '../../components/pagetitle';
import Navbar from '../../components/Navbar';
import Footer from '../../components/footer';
import Image from 'next/image';


const SeviceSinglePage = (props) => {
    const router = useRouter()
    
    const serviceDetails = Services.find(item => item.slug === router.query.slug)


    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    return (
        <Fragment>
            <Navbar/>
            <PageTitle pageTitle={serviceDetails?.title} pagesub={serviceDetails?.title}/>
            <div className="wpo-service-details-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12">
                            <div className="wpo-minimal-wrap">
                                <div className="wpo-minimal-img">
                                    <Image src={serviceDetails?.simg1} alt="" />
                                </div>
                            </div>
                            <div className="wpo-p-details-section">
                                <h5>Descripción</h5>
                                <p>{serviceDetails?.description}</p>
                                <p>{serviceDetails?.desc}</p>
                                <p>{serviceDetails?.desc2}</p>

                                <div className="row">
                                    <div className="col-md-6 col-sm-6 col-12">
                                        <div className="wpo-p-details-img">
                                            <Image src={serviceDetails?.sinnerImg1} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-12">
                                        <div className="wpo-p-details-img">
                                            <Image src={serviceDetails?.sinnerImg2} alt="" />
                                        </div>
                                    </div>
                                </div>

                                
                            </div>
                            {/* <Benefits/> */}
                        </div>
                        <ServiceSidebar />
                    </div>
                </div>
            </div>
            <Footer/>
        </Fragment>
    )
};
export default SeviceSinglePage;
