import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import Projects from '../../api/projects'
import Link from 'next/link'

const ClickHandler = () =>{
    window.scrollTo(10, 0);
 }

const ProjectSection = (props) => {
    return (
        <section className={`wpo-portfolio-section section-padding ${props.prClass}`}>
            <div className="container-fluid">
                <SectionTitle topTitle={'Portfolio'} MainTitle={'Our Amazing Work'} />
                <div className="sortable-gallery">
                    <div className="gallery-filters"></div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="portfolio-grids gallery-container clearfix">
                                {Projects.slice(15, 16).map((project, pitem) => (
                                    <div className="grid" key={pitem}>
                                        <div className="img-holder">
                                            <img src={project.pimg1} alt="" />
                                            <div className="hover-content">
                                                <h4><Link onClick={ClickHandler} href='/project/[slug]' as={`/project/${project.slug}`}>{project.title}</Link></h4>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {Projects.slice(16, 17).map((project, pitem) => (
                                    <div className="grid" key={pitem}>
                                        <div className="img-holder">
                                            <img src={project.pimg1} alt="" />
                                            <div className="hover-content">
                                                <h4><Link onClick={ClickHandler} href='/project/slug2' >{project.title}</Link></h4>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {Projects.slice(17, 25).map((project, pitem) => (
                                    <div className="grid" key={pitem}>
                                        <div className="img-holder">
                                            <img src={project.pimg1} alt="" />
                                            <div className="hover-content">
                                                <h4><Link onClick={ClickHandler} href='/project/slug3' >{project.title}</Link></h4>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectSection;