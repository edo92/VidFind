import React from 'react'
import { Input, Icon } from 'antd'
import './style.css'

const img = 'https://i.udemycdn.com/course/480x270/1172996_0241_5.jpg';

const ContentAd = () => {
    return (
        <div id='searchBanner-container' className='col-12'>
            <div className='col-12 p-0 h-100'>
                <div className='bg-img' style={{ backgroundImage: `url(${ img })`}}>
                    <div id='explore-search'>
                        <div className='py-2 text-white'>
                            <h2>Explore Video Content</h2>
                            <h5>Seach Video For Any Purepose</h5>
                        </div>
                        <div>
                            <Input id='explore-banner-input'
                                placeholder='Search Video'
                                suffix= { <Icon type='search'/> }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ContentAd;