import React from 'react'
import { Icon } from 'antd'
import './style.css'

import HamburgerMenu from '../../HamburgerMenu'

const MobileView = props => {
    return (
        <ul id='mobile-view-container' className='row col-12 m-0'>
            <li id='mobile-hambMenu'>
                <HamburgerMenu/>
            </li>
            <li id='main-logo-style'>
                <span className='text-right'>
                    <h3 className='logo-style'>VidFind</h3>
                </span>
            </li>
            <li id='search-bttn-icon'>
                <span onClick={ props.collapse }>
                    <Icon onClick={ props.collapse } type='search' />
                </span>
            </li>
        </ul>
    )
};

export default MobileView;