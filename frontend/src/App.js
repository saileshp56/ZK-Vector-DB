import logo from './logo.svg';
import SearchBar from './components/SearchBar';
import LinkList from './components/LinkList';
import Requests from './components/Requests';


import "./App.css"

function App() {
  return (
    <div className="container">
          <div className="main-content sm-width lg-width">
          <Requests question={"What color is a blue berry?"}/>
          {/* <LinkList /> */}
          {/* <SearchBar /> */}
      </div>

      
    </div>
  );
}

export default App;
