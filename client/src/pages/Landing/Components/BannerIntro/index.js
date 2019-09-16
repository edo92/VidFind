import React from 'react'
import './style.css'

import bannerImg from '../../../../static/images/banner.jpg'

const BannerIntro = () => {
    return (
        <div id='intro-container' className='col-12'>
            <div className='col-12 p-0'>
                <img id='landing-banner-img' src={ bannerImg }/>
            </div>
            <div className='col-12'>
                <div id='intro-textfild' className='col-12'>
                    <div className='main-text'>
                        <h3 className='main-shadow'>Video you're looking for</h3>
                        <h4 className='main-shadow'>Find a video of your need</h4>
                    </div>
                    <div className='row col-12 p-0 m-0 pt-3'>
                        <a href='/explore' id='intro-explore-btn' className='btn mx-1 p-2 px-4'> Explore </a>
                        <a href='/learnmore' id='intro-learn-btn' className='btn btn-light mx-1 px-3'> Learn More </a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default BannerIntro;