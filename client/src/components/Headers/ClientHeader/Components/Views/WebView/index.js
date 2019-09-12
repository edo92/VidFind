import React from 'react'
import { Icon, Dropdown, Avatar } from 'antd';
import './style.css'

import SearchInput from '../../SearchInput';

import userMenu from './Components/Menus/UserMenu'
import categoryMenu from './Components/Menus/CategoryMenu'
import myVideoMenu from './Components/Menus/MyVideoMenu'

const WebView = props => {
    return (
        <nav className='row col-12 m-0'>
            <ul id='webview-header-container'>
                <li>
                    <h3 className='logo-style'>VidFind</h3>
                </li>
                <li id='nav-category'>
                    <Icon className='nav-iconStyle' type='appstore' />
                    <Dropdown overlay={ categoryMenu } trigger={ ['click'] } className='nav-fontStyle'>
                        <a>
                            <span className='px-1'>Categories</span>
                            <Icon type='down' />
                        </a>
                    </Dropdown>
                </li>
                <li id='search-input'>
                    <SearchInput/>
                </li>
                <li id='nav-myContent'>
                    <Dropdown overlay={ myVideoMenu } trigger={ ['click'] } className='nav-fontStyle'>
                        <a>
                            My Videos <Icon type='down' />
                        </a>
                    </Dropdown>
                </li>
                <li id='nav-purchases'>
                    <Dropdown overlay={ props.menu } trigger={ ['click'] } className='nav-fontStyle'>
                        <a>
                            Purchases <Icon type='down' />
                        </a>
                    </Dropdown>
                </li>
                <li id='user-avatar'>
                    <Dropdown overlay={ userMenu }>
                        <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf', marginBottom:'1px' }} size='large'>GJ</Avatar>
                    </Dropdown>
                </li>
            </ul>
        </nav>
    )
};

export default WebView;