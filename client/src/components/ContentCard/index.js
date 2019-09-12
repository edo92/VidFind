import React from 'react'
import { Icon, Rate } from 'antd'
import './style.css'

const ContentCard = props => {
    return (
        <div id='contentCard-container' className={`col-12 col-sm-6 col-md-4 col-lg-3 ${props.className}`}>
            <ul className='client-video-list'>
                <li>
                    <div className='col-12 p-0 card-img'>
                        <Icon className='col-12 play-btn' type="play-circle" />
                        <img src={ props.item.image } alt='content-img' className='img-fluid'/>
                    </div>
                </li>
                <li>
                    <div className='videoTitle p-2'>
                        <span>Los Angeles Highrises</span><br/>
                        <small>By: Gary Jacobs</small>
                    </div>
                </li>
                <li>
                    <div className='px-2 pb-2'>
                        <span>
                            <Rate value={4.5}/> 
                            <small>4.5</small>
                        </span>
                    </div>
                </li>
            </ul>
        </div>
    )
};

export default ContentCard;