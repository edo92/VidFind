import React from 'react'
import './style.css'

import ContentCard from '../../../../components/ContentCard'

import list from '../TESTLIST.json'

const ContentBody = () => {
    return (
        <div className='col-12 p-3'>
            <div id='content-body-container'>
                <div  className='row col-12 m-0'>
                    { list.map(( item, i ) => {
                        return (
                            <ContentCard key={i} className='p-2' item={ item }  />
                        )
                    })}
                </div>
            </div>
        </div>
    )
};

export default ContentBody;