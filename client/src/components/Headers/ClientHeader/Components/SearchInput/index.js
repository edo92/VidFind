import React from 'react'
import { Input } from 'antd'

const SearchInput = () => {
    const Search = Input.Search;

    return (
        <Search
            placeholder='Search for any video'
            onSearch={value => console.log(value)}
        />
    )
};

export default SearchInput;