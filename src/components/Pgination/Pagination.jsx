import React from 'react';
import clases from './Pagination.module.css'

const Pagination = ({totalPages , hendlePreviusPage , hendleNextPage , hendlePageClick , currentPage}) => {
    return (
        <div className='flex justify-center gap-2 my-3'>
            <button onClick={ hendlePreviusPage }> {'<'} </button>
            { [...Array(totalPages)].map( (_ , index) => {
                return <button style={ { color: index + 1 === currentPage ? 'red' : 'black' } } disabled={ index + 1 === currentPage } onClick={ () => hendlePageClick(index + 1) } key={index}> {index + 1} </button>
            }) }

            <button onClick={ hendleNextPage }> {'>'} </button>
        </div>
    );
};

export default Pagination;