import React from 'react';
import Navbar from '../../components/Navbar/index';
import PageTitle from '../../components/pagetitle';
import ServiceSection from '../../components/ServiceSection';
import FunFact from '../../components/FunFact';
import PricingSection from '../../components/PricingSection';
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Lunamiel from '../../components/lunamiel';

const Destino = (props) => {

    return (
        <div>
            <Navbar />
            <PageTitle pageTitle={'Destinos de luna de miel'} pagesub={'Destinos de luna de miel'} />
            <Lunamiel pbClass={'pt-70'}/>
            {/* <FunFact fClass={'wpo-fun-fact-section-s2 section-padding pt-0'} />
            <PricingSection ptClass={'pt-0'} /> */}
            <Footer />
            <Scrollbar />
        </div>
    )
};
export default Destino;


