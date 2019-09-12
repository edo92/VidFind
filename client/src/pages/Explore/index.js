import React from 'react'
import './style.css'

import ClientHeader from '../../components/Headers/ClientHeader'
import ShowcaseCarousel from '../../components/Carousel'
import ClientFooter from '../../components/Footers/ClientFooter'
import SearchBanner from './Components/SearchBanner'

import dataArrayTest from './TESTLIST.json'

const Explore = props => {
    return (
        <div className='col-12 p-0'>
            <ClientHeader/>

            <SearchBanner/>

            <ShowcaseCarousel 
                title='Newest'
                list={dataArrayTest}
            />

            <ShowcaseCarousel 
                title='Most Popular'
                list={dataArrayTest}
            />

            <ClientFooter/>
        </div>
    )
};

export default Explore;