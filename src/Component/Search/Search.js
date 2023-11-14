import React from 'react';

const Search = ({search, handleSearch}) => {
    return (
            <div className='input-group mb-4'>
                <input type='text' className='form-control' onChange={handleSearch} value={search} placeholder='Search By ID'/>
            </div>
    );
};

export default Search;