import React from 'react';
import Navbar from '../../components/Navbar/index';
import PageTitle from '../../components/pagetitle';
import ServiceSection from '../../components/ServiceSection';
import FunFact from '../../components/FunFact';
import PricingSection from '../../components/PricingSection';
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import TeamSection from '../../components/team';
import ProjectSection from '../../components/ProjectSection';

const ServiceS2Page = (props) => {

    return (
        <div>
            <Navbar />
            <PageTitle pageTitle={'Lunas de Miel'} pagesub={'Service'} />
            <ProjectSection />
            <TeamSection />
            {/* <FunFact fClass={'wpo-fun-fact-section-s2 section-padding pt-0'} />
            <PricingSection ptClass={'pt-0'} /> */}
            <Footer />
            <Scrollbar />
        </div>
    )
};
export default ServiceS2Page;


