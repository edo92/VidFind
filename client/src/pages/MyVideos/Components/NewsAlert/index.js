import React, { Component } from 'react'
import { Icon } from 'antd'
import './style.css'

class NewsAlert extends Component {
    state={
        message: ''
    }

    componentDidMount(){
        this.setMessage();
    }

    setMessage = () => {
        if( this.props.message ){
            this.setState({
                message: this.props.message
            });
        }
    }

    removeMessage = () => {
        this.setState({
            message: ''
        });
    }

    render(){
        return (
            <div className='col-12 p-0 py-3'>
                { this.state.message ? 
                    <div id='news-alert-container' className='col-12 p-0'>
                        <ul id='news-alert-innter' className='col-10 py-4 m-0'>
                            <li className='display-flex'>
                                <Icon className='font-21' type='mail'/>
                                <h6 className='mx-3'>{ this.state.message }</h6>
                                <a className='mx-5 weight-500 font-13 underline'>Learn More</a>
                            </li>
                            <li>
                                <a onClick={ this.removeMessage } className='text-right'>X</a>
                            </li>
                        </ul>
                    </div>
                : null }
            </div>
        )
    }
};

export default NewsAlert;