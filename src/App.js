import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [ personsState, setPersonsState] = useState({
    persons: [
      { name: 'himanshu', age:23},
      { name: 'john', age:24}
    ]
  });

  const [ otherState, setOtherState] = useState('any value');
  const switchNameHandler = (othervalue) => {
    setPersonsState({
      persons: [
      { name: 'patel', age:23},
      { name: othervalue, age:26}
      ]
    })
  };
  return(
    // React.createElement('div', null, React.createElement('h1', null, 'Hi, This is my First React App'))
    <div className="App">
      <button onClick={switchNameHandler.bind(this, 'himanshu')}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
        click={switchNameHandler.bind(this, 'sudhanshu')} />
      <Person
        name={personsState.persons[1].name} age={personsState.persons[1].age}>My hobbies: Hacking</Person>
    </div>

  );
}
export default App;

// function App() {
//   return (

    // React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, This is my First React App'))
      // <header className="App-header">
      //   <img src={logo} className="App-logo" alt="logo" />
      //   <p>
      //     Edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <a
      //     className="App-link"
      //     href="https://reactjs.org"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     Learn React
      //   </a>
      // </header>

    // <h1> My First React App </h1>
//   );
// }


// state =
