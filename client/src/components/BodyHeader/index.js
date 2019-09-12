import React from 'react'
import './style.css'

const BodyHeader = props => {
    return(
        <div id='body-header-container' className='col-12'>
            <div id='title-container' className='col-12'>
                <div className='col-12 p-0 pl-3'>
                    <div className='body-breadcrumb'>{ props.breadcrumb }</div>
                    <h1 className='body-title'>{ props.title }</h1>
                </div>
            </div>
            <div id='menu-container' className='col-12'>
                <div className='col-12 p-0'>
                    { props.content }
                </div>
            </div>
        </div>
    )
};

export default BodyHeader;