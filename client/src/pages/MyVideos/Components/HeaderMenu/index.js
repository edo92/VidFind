import React from 'react'
import { Menu, Icon } from 'antd';

const HeaderMenu = props => {
    return (
        <Menu 
            onClick={ props.selectMenu } 
            selectedKeys={[props.selected]} 
            mode='horizontal'
        >
            <Menu.Item key='videos'>
                <Icon type='mail' /> My Videos
            </Menu.Item>

            <Menu.Item key='purchases'>
                <Icon type='mail' /> Purchases
            </Menu.Item>
            
            <Menu.Item key='Wishlist'>
                <Icon type='mail' /> Wishlist
            </Menu.Item>
        </Menu>
    )
};

export default HeaderMenu;