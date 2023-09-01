import React, { Fragment } from 'react';
import { useRouter } from 'next/router'
import Projects from '../../api/projects'
import Link from 'next/link'
import { Gallery, Item } from 'react-photoswipe-gallery'
import PageTitle from '../../components/pagetitle';
import Navbar from '../../components/Navbar';
import Footer from '../../components/footer';



const ProjectSinglePage = (props) => {
    const router = useRouter()

    const projectDetails = Projects.find(item => item.slug === router.query.slug)



    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={projectDetails?.title} pagesub={projectDetails?.title} />

            <section className="wpo-portfolio-single-section section-padding">
                <div className="container">
                    <div className="portfolio-single-wrap">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-12">
                                <div className="portfolio-single-img">
                                    <img src={projectDetails?.pSimg} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6 col-12">
                                <div className="portfolio-single-text">
                                    <h2>{projectDetails?.title}</h2>
                                    <span>{projectDetails?.location}</span>
                                    <p>{projectDetails?.desc}</p>
                                    <div className="wpo-portfolio-single-content-des">
                                        <ul>
                                            {/* <li>Client :<span>Robert William</span></li>
                                            <li>Location :<span>7 Lake Street,London</span></li> */}
                                            <li>Date :<span>{projectDetails?.date}</span></li>
                                            {/* <li>Duration : <span>3 Month</span></li>
                                            <li>Tag :<span>Wedding, Planning</span></li> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wpo-portfolio-section-s3 section-padding">
                        <h2 className="hidden">some</h2>
                        <div className="sortable-gallery">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="portfolio-grids gallery-container clearfix">

                                        <Gallery>                                            
                                            <div className="grid">
                                                <div className="img-holder">
                                                    <Item original={projectDetails?.pimg2} thumbnail={projectDetails?.pimg2} width="600" height="700">
                                                        {({ ref, open }) => <img ref={ref} onClick={open} src={projectDetails?.pimg2} />}
                                                    </Item>
                                                </div>
                                            </div>
                                            <div className="grid">
                                                <div className="img-holder">
                                                    <Item original={projectDetails?.pimg3} thumbnail={projectDetails?.pimg3} width="600" height="700">
                                                        {({ ref, open }) => <img ref={ref} onClick={open} src={projectDetails?.pimg3} />}
                                                    </Item>
                                                </div>
                                            </div>
                                            <div className="grid">
                                                <div className="img-holder">
                                                    <Item original={projectDetails?.pimg4} thumbnail={projectDetails?.pimg4} width="600" height="700">
                                                        {({ ref, open }) => <img ref={ref} onClick={open} src={projectDetails?.pimg4} />}
                                                    </Item>
                                                </div>
                                            </div>
                                        </Gallery>
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
export default ProjectSinglePage;
