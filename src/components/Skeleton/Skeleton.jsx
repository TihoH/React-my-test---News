import React from 'react';
import clases from './Skeleton.module.css'

const Skeleton = ({count = 1 , type = 'banner'}) => {
    return (
        <div>
            {count > 1 ? (
                <ul className={clases.list}>
                    {[...Array(count)].map((_ , index) => (
                            <li key={index} className={ type === 'banner' ? clases.banner : clases.item  } ></li>
                    ))}
                </ul>
            )   
            :
            <li className={ type === 'banner' ? clases.banner : clases.item  } ></li>
        
        }
        </div>
    );
};

export default Skeleton;