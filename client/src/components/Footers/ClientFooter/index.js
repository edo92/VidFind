import React from 'react'
import './style.css';

const ClientFooter = () => {
    return(
        <div id='client-footer-container' className='col-12'>
            <ul id='client-footer-inner'>
                <li>
                    <a href='/' className='decor-none'>
                        <h4 className='logo-style'>VidFind</h4>
                    </a>
                </li>
                <li>
                    <small>Copyright @ 2019 VidFind, inc.</small>
                </li>
                <li>
                    <div className='hidden-md p-children-1'>
                        <a><small>Terms</small></a>
                        <a><small>Privacy Policy</small></a>
                    </div>
                </li>
            </ul>
        </div>
    )
};

export default ClientFooter;