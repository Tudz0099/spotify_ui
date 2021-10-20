import React, {useState, useEffect, useContext} from 'react'
import {ReactComponent as SearchIcon} from '../share/icons/search.svg'

export default function Search() {

    const [keyword, setKeyword] = useState()

    const handleChange = event => {
        setKeyword(event.target.value)
    }

    console.log(keyword)
    return (
        <div className="search">
            <div className="d_flex form_search"> 
                <SearchIcon/>
                <input type="text"
                       placeholder="Search" 
                       value={keyword}
                       onChange={handleChange}/>
            </div>
           
        </div>
    )
}
