import React from 'react'
import { Skeleton } from 'antd'
import './style.css'

const CardSkeleton = () => {
    return (
        <ul className='row col-12 p-0 m-0'>
            <li className='col-12 col-sm-6 col-md-4 col-lg-3'>
                <span className='skeleton-body'>
                    <Skeleton active />
                </span>
                <span className='skeleton-bottom'>
                    <Skeleton active />
                </span>
            </li>
            <li className='col-sm-6 col-md-4 col-lg-3 hidden-xs'>
                <span className='skeleton-body'>
                    <Skeleton active />
                </span>
                <span className='skeleton-bottom'>
                    <Skeleton active />
                </span>
            </li>
            <li className='col-md-4 col-lg-3 hidden-sm'>
                <span className='skeleton-body'>
                    <Skeleton active />
                </span>
                <span className='skeleton-bottom'>
                    <Skeleton active />
                </span>
            </li>
            <li className='col-lg-3 hidden-md'>
                <span className='skeleton-body'>
                    <Skeleton active />
                </span>
                <span className='skeleton-bottom'>
                    <Skeleton active />
                </span>
            </li>
        </ul>
    )
};

export default CardSkeleton;