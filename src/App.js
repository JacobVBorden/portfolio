import React from 'react';
import './App.css';
import NavBar from "./componets/MainPage"

class App extends React.Component {
  state = {  }
  render() { 
    return (  
      <div className="App">
        <NavBar className="nav"/>
      </div>
    );
  }
}
 
export default App;


