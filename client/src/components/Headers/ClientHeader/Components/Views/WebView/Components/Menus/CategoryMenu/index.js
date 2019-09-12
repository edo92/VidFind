import React from 'react'
import { Menu } from 'antd';

const CategoryMenu = props => { 
    return (
        <Menu id='category-menu' className='p-2'>
            <Menu.Item key='1'> Cities </Menu.Item>

            <Menu.Item key='2'> Animation </Menu.Item>

            <Menu.Item key='3'> Abstract</Menu.Item>

            <Menu.Item key='4'> Space </Menu.Item>

            <Menu.Item key='5'> Streets </Menu.Item>
        </Menu>
    )
};

export default CategoryMenu;
