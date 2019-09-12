import React from 'react'
import './style.css'

import BodyHeader from '../../components/BodyHeader'
import ClientFooter from '../../components/Footers/ClientFooter'
import CartBody from './Components/CartBody'
import Breadcrumb from '../../components/Breadcrumb'
import ShowcaseCarousel from '../../components/Carousel'

import cartItems from '../../static/projects/cartlist.json'
import ClientHeader from '../../components/Headers/ClientHeader'

const ShoppingCart = () => {
    return (
        <div className='col-12 p-0'>
            <ClientHeader/>
            
            <BodyHeader 
                title={ 'Shopping Cart' }
                breadcrumb={ 
                    <Breadcrumb routes='/cart'/>
                }
            />

            <CartBody cartItems={ cartItems }/>

            <ShowcaseCarousel 
                title='You might also like'
                list={ cartItems }
            />

            <ClientFooter/>
        </div>
    )
};

export default ShoppingCart;