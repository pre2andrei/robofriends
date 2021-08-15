import React from 'react';

const SearchBox = ({onSearchChange}) => {
    return (<div>
        <input
        onChange = {onSearchChange}
        className='pa3 ba b--green bg-lightest-blue'
        type='search' placeholder='Search Friends'></input>
    </div>)
}

export default SearchBox;
