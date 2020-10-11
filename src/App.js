import React from 'react';
import './App.css';
import MainPage from "./componets/MainPage"

class App extends React.Component {
  state = {  }
  render() { 
    return (  
      <div className="App">
        <MainPage className="nav"/>
      </div>
    );
  }
}
 
export default App;


