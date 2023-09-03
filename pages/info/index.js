import React from 'react';
import Navbar from '../../components/Navbar/index';
import PageTitle from '../../components/pagetitle';
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Info from '../../components/info';

const StoryPage = (props) => {

    return (
        <div>
            <Navbar/>
            <PageTitle pageTitle={'¿Cómo funciona?'} pagesub={'¿Cómo funciona?'}/> 
            <Info/>
            <Footer/>
            <Scrollbar/>
        </div>
    )
};
export default StoryPage;


