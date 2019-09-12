import React from 'react'

const FooterNav = () => (
    <div className='row col-12 p-0 m-0'>
        <nav className='col-4'>
            <h2>Learn More</h2>
            <ul className='p-0 m-0 pt-2'>
                <li>
                    <a>How it works</a>
                </li>
                <li>
                    <a>Benefits</a>
                </li>
                <li>
                    <a>Disclosure</a>
                </li>
            </ul>
        </nav>
        <nav className='col-4'>
            <h2>Services</h2>
            <ul className='p-0 m-0 pt-2'>
                <li>
                    <a>Membership</a>
                </li>
                <li>
                    <a>Plance</a>
                </li>
                <li>
                <   a>Pricing</a>
                </li>
            </ul>
        </nav>
        <nav className='col-4'>
            <h2>Company</h2>
            <ul className='p-0 m-0 pt-2'>
                <li>
                    <a>About AlogX</a>
                </li>
                <li>
                    <a>Contact Us</a>
                </li>
                <li>
                    <a>Contributions</a>
                </li>
            </ul>
        </nav>
    </div>
);

export default FooterNav;