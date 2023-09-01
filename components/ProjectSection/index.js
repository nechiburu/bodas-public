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
                <SectionTitle topTitle={'Momentos Maravillosos'} MainTitle={'Explora nuestra colección de parejas felices.'} />
                <div className="sortable-gallery">
                    <div className="gallery-filters"></div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="portfolio-grids gallery-container clearfix">
                                {Projects.slice(15, 22).map((project, pitem) => (
                                    <div className="grid" key={pitem}>
                                        <div className="img-holder">
                                            <img src={project.pimg1} alt="" />
                                            <div className="hover-content">
                                            <h4>{project.title}</h4>
                                                <span>{project.location}- {project.date}</span>
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