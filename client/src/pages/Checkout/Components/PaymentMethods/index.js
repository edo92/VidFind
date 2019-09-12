import React from 'react'
import { Icon, Radio, Collapse } from 'antd'
import './style.css'

const visaImg = 'https://www.udemy.com/staticx/udemy/images/v7/card-visa.svg';
const payPalImg = 'https://s3.amazonaws.com/growth-prototypes/pp_cc_mark_111x69.jpg';
const { Panel } = Collapse;


const ProceedPayment = props => (
    <div className='row col-12 p-0 m-0'>
        <div className='col-12 col-sm-5 col-md-12 col-lg-6'>
            <a className='checkout-button btn'>{ props.bttn }</a>
        </div>
        <div className='col-8 col-sm-5 col-md-8 col-lg-4 p-xs-3 p-md-3'>
            <span>
                <small>By completing your purchase you agree to these </small>
                <a><small>Terms of Service</small></a>
            </span>
        </div>
        <div className='col-4 col-sm-2 col-md-4 col-lg-2 p-xs-3 p-md-3'>
            <span className='display-flex pt-2' style={{opacity:'.4'}}>
                <Icon style={{fontSize:'32px'}} type='lock'/>
                <small>Secure Payment</small>
            </span>
        </div>
    </div>
);

const PaymentMethods = props => {
    return (
        <div className='col-12 p-0'>
            <div id='card-payment-method'>
                <Collapse 
                    defaultActiveKey={[props.which]} 
                    onChange={ props.selectMethod }
                    expandIcon={({ isActive }) => <Radio onChange={ props.selectMethod } value={false}/> }
                >
                    <Panel 
                        key="1" 
                        header={ <img style={{width:'45px'}} alt='paypal-logo' src={ payPalImg }/> }
                    >
                        <ProceedPayment bttn={'Proceed'} />
                    </Panel>
                    <Panel 
                        key="2"  
                        header={ <img alt='visa-logo' src={ visaImg }/> }

                    >
                        <ProceedPayment 
                            bttn={'Complete Payment'}
                        />
                    </Panel>
                </Collapse>
            </div>
        </div>
    )
};

export default PaymentMethods;