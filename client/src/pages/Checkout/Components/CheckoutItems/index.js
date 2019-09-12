import React from 'react'
import './style.css'

const CheckoutItems = props => {
    let items = props.items;

    return (
        <div className='col-12 p-0'>
            <div id='checkout-items-container' className='col-12'>
                <div className='col-12 p-0 m-0'>
                    { items ? items.map(( item, i ) => {
                        return (
                            <div key={ item.title+i } className='col-12 p-0 pt-2'>
                                <ul className='col-12 p-0 py-1 checkout-item'>
                                    <li className='px-1'>
                                        <img className='mx-width-100px' alt='item-img' src={ item.image }/>
                                    </li>
                                    <li className='px-1'>
                                        <p className='font-13'>{ item.title }</p>
                                    </li>
                                </ul>
                            </div>
                        )
                    }) : null }
                </div>
            </div>
        </div>
    )
};

export default CheckoutItems;