import React from 'react'
import { Icon, Dropdown, Avatar, Button } from 'antd'
import './style.css'

import SearchInput from '../../SearchInput'

import userMenu from './Components/Menus/UserMenu'
import categoryMenu from './Components/Menus/CategoryMenu'
import myVideoMenu from './Components/Menus/MyVideoMenu'

const WebView = props => {
    return (
        <nav className='row col-12 m-0'>
            <ul id='webview-header-container'>
                <li>
                    <a href='/'><h3 className='logo-style'>VidFind</h3></a>
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
                { props.auth ? <li id='nav-myContent'>
                    <Dropdown overlay={ myVideoMenu } trigger={ ['click'] } className='nav-fontStyle'>
                        <a>
                            My Videos <Icon type='down' />
                        </a>
                    </Dropdown>
                </li> : <li>
                    <span>
                        <Icon className='px-1' type='global'/>
                        <a href='/explore' className='nav-fontStyle'>Explore</a>
                    </span>
                </li> }

                { props.auth ? <li id='nav-purchases'>
                    <a className='header-icon pr-2'>
                        <Icon type='play-circle' />
                    </a>
                    <a className='header-icon-mx pl-2'>
                        <Icon type='shopping-cart' />
                    </a>
                </li> : <li>
                    <span className='nav-fontStyle'>
                        <a className='px-3 '>Sign Up</a>
                        <Button onClick={ props.handleSingIn } id='unauth-main-bttn'><a>Sign In</a></Button>
                    </span>
                </li> }
                
                { props.auth ? <li id='user-avatar'>
                    <Dropdown overlay={ userMenu }>
                        <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf', marginBottom:'1px' }} size='large'>GJ</Avatar>
                    </Dropdown>
                </li> : null }
            </ul>
        </nav>
    )
};

export default WebView;