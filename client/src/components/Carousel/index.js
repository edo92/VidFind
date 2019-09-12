import React from 'react';
import './style.css';

import Carousel from './Components/Carousel/index';
import CardSkeleton from './Components/CardSkeleton'

class ShowcaseCarousel extends React.Component {
    state={
        loading: true
    }

    componentDidMount(){
        this.loadingState();
    }

    loadingState = () => {
        setTimeout(() => { 
            this.setState({
                loading: false
            })
        }, 800);
    }

    render(){
        const props = this.props;
        return(
            <div className='col-12 p-3'>
                <div className='col-12 m-0 px-4'>
                    <ul className='col-12 p-0 m-0 display-flex'>
                        <li className='content-title'>
                            <h4 className='title'>{ props.title }</h4>  
                        </li>
                        <li className='viewall-content'>
                            <a className='viewall-bttn'>View all</a>
                        </li>
                    </ul>
                </div>
                <div id='showcase-container'>
                    <div className='col-12 p-0'>
                        { this.state.loading ? 
                            <CardSkeleton/> :
                            <Carousel list={ props.list }/>
                        }
                    </div>
                </div>
            </div>
        )
    }
};
export default React.memo( ShowcaseCarousel );
