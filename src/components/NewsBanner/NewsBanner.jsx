import React from 'react';
import classes from './NewsBanner.module.css'
import { formatTimAgo } from '../utils/formatTimeAgo';
import Image from '../Image/Image';

const NewsBanner = ({item}) => {
    return (
        <div className='flex w-full flex-col'>
            <Image image={item?.image} />
            <h3 className='text-gray-700 font-semibold'>{item.title}</h3>
            <p className='font-semibold'>{formatTimAgo(item.published)} by {item.author}</p>
        </div>
    );
};

export default NewsBanner;