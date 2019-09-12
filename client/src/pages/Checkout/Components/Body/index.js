import React, { Component, memo } from 'react'
import { Divider } from 'antd'
import './style.css'

import PaymentMethods from '../PaymentMethods'
import CheckoutItems from '../CheckoutItems'

class CheckoutBody extends Component {
    state={
        which: '1'
    }

    paymentMethodSelect = e => {
        this.setState({
            which: '2'
        });
    };

    render(){
        return (
            <div id='checkout-container' className='col-12 p-0'>
                <div id='checkout-body-container' className='row col-12'>
                    <div className='col-12 col-md-7 col-lg-6 order-2'>
                        <div id='checkout-items'>
                            <div className='col-12 p-0'>
                                <h6> Your Items </h6>
                                <Divider className='my-3'/>
                                <div className='col-12 p-0'>
                                    <div className=''>
                                        <CheckoutItems items={ this.props.cartList }/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-5 col-lg-6 order-md-2 pb-5'>
                        <div id='payment-methods'>
                            <div className='col-12'>
                                <h6> Total: $19.99 </h6>
                                <Divider className='my-3'/>
                                <div className='col-12 p-0'>
                                    <PaymentMethods
                                        selectMethod={ this.paymentMethodSelect }
                                        which={ this.state.which }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default memo( CheckoutBody );