import React from 'react';
import { formateDate } from '../utils/formatDate';

const Header = () => {
    return (
        <header className='border-b border-gray-200 p-5'>
            <h1 className='text-2xl font-semibold'>News REACTIFY</h1>
            <p className='font-medium'>{formateDate(new Date())}</p>
        </header>
    );
};

export default Header;