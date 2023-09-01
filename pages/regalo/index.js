import React from 'react';
import Navbar from '../../components/Navbar/index';
import Scrollbar from '../../components/scrollbar';
import ServiceSection2 from '../../components/ServiceSection2';
import Footer from '../../components/footer';


const Regalo = (props) => {

    return (
        <div>
            <Navbar />
            <div className="wpo-box-style">
                <ServiceSection2 />
                <Footer />
            </div>
            <Scrollbar />
        </div>
    )
};
export default Regalo;


