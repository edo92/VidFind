import React from 'react'
import './style.css'

const BannerIntro = () => {
    return (
        <div id='intro-container' className='col-12'>
            <div className='col-12'>
                <div id='intro-textfild' className='col-12'>
                    <h3>Video you're looking for</h3>
                    <h4>Find a video of your need</h4>
                    <div className='row col-12 p-0 m-0 pt-3'>
                        <a href='/register' id='intro-signup-btn' className='btn mx-1 p-2 px-4'> Sign Up </a>
                        <a href='/learnmore' id='intro-learn-btn' className='btn btn-light mx-1 px-3'> Learn More </a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default BannerIntro;