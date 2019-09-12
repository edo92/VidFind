import React from 'react'
import { Icon } from 'antd'
import './style.css'
import FooterNav from './Components/FooterNav';

const Footer = () => {
    return(
        <div className='col-12 p-0'>
            <div id='footer-container' className='col-12 p-0'>
                <div id='footer-nav' className='row col-12 m-0'>
                    <div className='col-12 col-md-8 col-lg-9 p-0 m-0 pt-3'>
                        <div className='col-12 p-0'>
                            <FooterNav/>
                        </div>
                    </div>
                    <div id='social-container' className='col-12 col-md-4 col-lg-3'>
                        <div className='row col-12 m-0 p-0 f-iconStyle'>
                            <Icon className='col-1 mt-1 mx-2' type='facebook' />
                            <Icon className='col-1 mt-1 mx-2' type='twitter' />
                            <Icon className='col-1 mt-1 mx-2' type='instagram' />
                            <Icon className='col-1 mt-1 mx-2' type='linkedin' />
                            <Icon className='col-1 mt-1 mx-2' type='google-plus' />
                        </div>
                    </div>
                </div>
                <div id='footer-bottom' className='col-12 p-0'>
                    <div className='col-12 p-0 m-0 pt-3'>
                        <div className='col-12'>
                            <p className='text-center text-white'>© 2019 Copyright AlgoX</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer;
