import React from 'react'
import Footer from '../../components/Footers/Footer';
import MainHeader from '../../components/Headers/MainHeader'
import BannerIntro from './Components/BannerIntro'
import BasicInfo from './Components/BasicInfo';
import BottomInfo from './Components/BottomInfo';

const LandingPage = () => {
    return (
        <div className='col-12 p-0'>
            <MainHeader/>

            <BannerIntro/>

            <BasicInfo/>

            <BottomInfo/>
            
            <Footer/>
        </div>
    )
};

export default LandingPage;