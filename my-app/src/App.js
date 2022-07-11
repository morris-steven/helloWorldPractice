import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Button from '@mui/material/Button';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Steven Morris
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button variant="contained"
        href="https://www.google.com/?safe=active&ssui=on"
        target="_blank"
        rel="noopener noreferrer"
        >Google</Button>

<Button variant="outlined"
href="https://amazon.com"
target="_blank"
rel="noopener noreferrer"
>Shop</Button>

        <a
          className="App-link"
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
         <Button color="error"
         className="App-link"
         href="https://youtube.com"
         target="_blank"
         rel="noopener noreferrer"
         >Youtube</Button>
         <Button color="secondary"
         className="App-link"
         href="https://instagram.com"
         target="_blank"
         rel="noopener noreferrer"
         >Instagram</Button>
         <Button variant="text"
         className="App-link"
         href="https://twitter.com"
         target="_blank"
         rel="noopener noreferrer"
         >Twitter</Button>

        
        </a>
       

    
      </header>
    </div>
  );
}

export default App;
