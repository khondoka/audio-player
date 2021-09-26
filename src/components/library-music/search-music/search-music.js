import React from 'react'

const SearchMusic = ({ onSearch, term, setTerm }) => {

    const onSearchChange = (e) => {
        const term = e.target.value;
        setTerm(term);
        onSearch(term);
    }

    return (
        <div className="responsive-search">
            <input
                onChange={onSearchChange}
                type="text"
                placeholder="Search..."
                value={term}
            />
        </div>
    )
}

export default SearchMusic
