import React from 'react'
import { Menu } from 'antd';

const MyVideoMenu = props => { 
    return (
        <Menu id='myvideo-menu' className='user-avatar p-2'>
            <Menu.Item key='1'> Purchased </Menu.Item>

            <Menu.Item key='2'> Wishlist </Menu.Item>

            <Menu.Item key='3'> MyVideos </Menu.Item>
        </Menu>
    )
};

export default MyVideoMenu;
