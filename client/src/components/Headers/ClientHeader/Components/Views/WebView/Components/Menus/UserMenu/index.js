import React from 'react'
import { Icon, Menu, Divider } from 'antd';

const MenuContent = props => { 
    return (
        <Menu className='user-avatar p-2'>
            <Menu.Item key='1'>
                <Icon type='user' /> Account
            </Menu.Item>

            <Menu.Item key='2'>
                <Icon type='bell' /> Notifications
            </Menu.Item>

            <Menu.Item key='3'>
                <Icon type='message' /> Messages
            </Menu.Item>

            <Divider className='my-1'/>

            <Menu.Item key='4'>
                <Icon type='info-circle' /> Help
            </Menu.Item>

            <Menu.Item key='5'>
                <Icon type='user' /> Log Out
            </Menu.Item>
        </Menu>
    )
};

export default MenuContent;
