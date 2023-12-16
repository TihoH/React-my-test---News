import React from 'react';
import clases from './Images.module.css'

const Image = ({image}) => {
    return (
        <div className={clases.wrapper}>
            { image ? <img src={image} alt='image-news' className={clases.image} /> : null }
        </div>
    );
};

export default Image;