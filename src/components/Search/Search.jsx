import React from 'react';

const Search = ({keywords , setKeywords}) => {
    return (
        <div className='my-2'>
            <input type="text" 
                    value={keywords} 
                    onChange={keywodrsValue => setKeywords(keywodrsValue.target.value)} 
                    className='p-2 border w-full rounded-lg' 
                    placeholder='Search'
                />
        </div>
    );
};

export default Search;