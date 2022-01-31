import logo from './logo.svg';
import './App.css';
import Dropdown from './components/Dropdown';
import SearchBar from './components/SearchBar';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to RateMyDorms
          <p>
            <SearchBar placeholder="Search for a college"></SearchBar>
          </p>
          
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
