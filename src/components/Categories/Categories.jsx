import React from 'react';
import clases from './Categories.module.css'

const Categories = ({categories , setSelectedCategory , selectedCategory}) => {
    return (
        <div className='flex gap-2 items-start   scroll overflow-x-auto mb-4'>
            {categories.map( category => 
                <button 
                    onClick={ () => setSelectedCategory(category) }
                    className={selectedCategory === category ? clases.active : clases.item} 
                    key={category}
                >{category}</button>
            )}
        </div>
    );
};

export default Categories;