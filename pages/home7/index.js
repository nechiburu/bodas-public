import React from 'react';
import Navbar from '../../components/Navbar/index';
import PageTitle from '../../components/pagetitle';
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import TeamSection from '../../components/team';

const StoryPage = (props) => {

    return (
        <div>
            <Navbar/>
            <PageTitle pageTitle={'Parejas'} pagesub={'Parejas'}/> 
            <TeamSection/>
            <Footer/>
            <Scrollbar/>
        </div>
    )
};
export default StoryPage;