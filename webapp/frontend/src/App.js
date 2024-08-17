import logo from './logo.svg';
import SearchBar from './components/SearchBar';
import LinkList from './components/LinkList';
import Requests from './components/Requests';
import {useState} from 'react';

import "./App.css"

function App() {
  const [query, setQuery] = useState('')
  const [isLoadingOrNull, setIsLoadingOrNull] = useState(true)
  const searchHandler = (searchQuery) => {
    console.log("query", searchQuery)
    setQuery(searchQuery)
  }

  const showSources = (data) => {
    setIsLoadingOrNull(!data)
  }
  
  return (
    <div className="container">
          <div className="main-content sm-width lg-width">
          <SearchBar searchHandler={searchHandler}/>
          {!isLoadingOrNull && <LinkList />}
          {query != '' && <Requests question={query} showSources={showSources}/>}

          {/* <Requests/>            */}
      </div>

      
    </div>
  );
}

export default App;
