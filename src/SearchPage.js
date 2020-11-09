import React from 'react'
import './SearchPage.css'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
                <hr/>
            </div>
        </div>
    )
}

export default SearchPage