import React, { Component, memo } from 'react' 
import { Button, Icon } from 'antd'
import './style.css'

const itemImg = 'https://i.udemycdn.com/course/240x135/2395488_bd78_2.jpg';

class CartItemsList extends Component {
    state={
        cartItems: []
    }

    componentDidMount(){
        this.setState({
            cartItems: this.props.cartItems
        })
    }

    removeItem = id => {
        let { cartItems } = this.state;
        this.setState({
            cartItems: cartItems.filter( item => item.id !== id )
        })
    }

    saveLater = id => {
        // save in wishlist, then remove
        this.removeItem( id );
    }

    render(){
        let { cartItems } = this.state;

        return(
            <div id='cart-items-container'>
                { cartItems ? cartItems.map(( item, i ) => {
                    return (
                        <ul key={ item.title+i } className='cart-item'>
                            <li className='col-3'>
                                <div>
                                    <img alt='cart-item' className='img-fluid' src={ itemImg }/>
                                </div>
                            </li>
                            <li className='col-6'>
                                <div>
                                    <p className='fluid-text'>{ item.title }</p>
                                </div>
                            </li>
                            <li className='col-3 text-right'>
                                <div>
                                    <Button 
                                        onClick={()=> this.removeItem( item.id )}>
                                        <a className='visible-md'><Icon type='delete'/></a>
                                        <a className='hidden-md'>Remove</a>
                                    </Button>
                                </div>
                                <div>
                                    <Button onClick={()=> this.saveLater( item.id )}>
                                    <a className='visible-md'><Icon type='inbox'/></a>
                                    <a className='hidden-md'>Save</a>
                                    </Button>
                                </div>
                            </li>
                        </ul>
                    )
                }) : null }
            </div>
        )
    }
};

export default memo( CartItemsList );