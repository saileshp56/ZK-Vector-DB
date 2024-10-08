import React from 'react'
import "../styles/SearchBar.css"
import Bar from "./Bar"

const SearchBar = ({searchHandler}) => {
  return (
        <div className="about-body">
            <div className="about-docs">
            A Machine Learning Search Engine, Powered by SP1
            </div>
            <Bar searchHandler={searchHandler}/>
        </div>
  )
}

export default SearchBar