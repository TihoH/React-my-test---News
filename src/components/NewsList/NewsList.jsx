import React from 'react';
import NewsItem from '../NewsItem/NewsItem';

const NewsList = ({news}) => {
    return (
        <div>
            <ul className='flex flex-col gap-2 mt-2'>
                {news.map(item => 
                    <NewsItem item={item} key={item.id} />
                )}
            </ul>
        </div>
    );
};

export default NewsList;