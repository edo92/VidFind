import React from 'react'
import { Divider, Input, Button } from 'antd';
import './style.css'

import CartItems from '../CartItems';

const CartBody = props => {
    return (
        <div id='cart-body-container' className='row col-12'>
            <div className='col-12 col-md-7 col-lg-7 order-2'>
                <div id='items-list-section'>
                    <h4 className='title'>Items in Cart</h4>
                    <Divider className='mt-2 mb-2'/>
                    <CartItems cartItems={ props.cartItems }/>
                </div>
            </div>
            <div className='col-12 col-md-5 col-lg-5 order-md-2'>
                <div className='col-12 p-0'>
                    <div id='checkout-section'>
                        <div>
                            <h5>Total: $19.99</h5>
                            <Divider className='my-3'/>
                        </div>
                        <ul className='col-12 m-0'>
                            <li>
                                <a className='checkout-btn btn'> Checkout </a>
                            </li>
                            <Divider className='my-3'/>
                            <li>
                                <div className='display-flex'>
                                    <Input placeholder='Applay Coupon Code'/>
                                    <Button>Apply</Button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CartBody;