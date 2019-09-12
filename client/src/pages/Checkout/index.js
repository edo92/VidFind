import React from 'react';
import './style.css'

import BodyHeader from '../../components/BodyHeader'
import Breadcrumb from '../../components/Breadcrumb'

import cartList from '../../static/projects/cartlist.json'
import ClientHeader from '../../components/Headers/ClientHeader';
import ClientFooter from '../../components/Footers/ClientFooter';
import CheckoutBody from './Components/Body'

const Checkout = () => {
    return (
        <div className='col-12 p-0'>
            <ClientHeader/>

            <BodyHeader
                title='Checkout'
                breadcrumb={
                    <Breadcrumb routes='/cart/Checkout'/>
                }
            />

            <CheckoutBody cartList={ cartList }/>

            <ClientFooter/>
        </div>
    )
};

export default Checkout;