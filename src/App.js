import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const App = props => {
  const [ personsState, setPersonsState] = useState({
    persons: [
      { name: 'himanshu', age:23},
      { name: 'john', age:24}
    ],
    showPersons: false
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

  const nameChangeHandler = (event) => {
    setPersonsState({
      persons: [
      { name: event.target.value, age:23},
      { name: 'jonh', age:26}
      ]
    })
  };
  const style = {
    backgroundColor: 'silver',
    font: 'inherit',
    cursor: 'pointer'
  };
  const togglePersonHandler = (props) => {
      const doesShow = personsState.showPersons
      setPersonsState({
        persons: [
          { name: 'himanshu', age:23},
          { name: 'john', age:24}
        ],
        showPersons: !doesShow
      })
  };

  let persons = null
  if(personsState.showPersons){
    persons = (
      <div>
        <Person
          name={personsState.persons[0].name}
          age={personsState.persons[0].age}
          click={switchNameHandler.bind(this, 'sudhanshu')}
          changed={nameChangeHandler} />
        <Person
          name={personsState.persons[1].name} age={personsState.persons[1].age}>My hobbies: Hacking</Person>
    </div>
    )
  }
  return(
    // React.createElement('div', null, React.createElement('h1', null, 'Hi, This is my First React App'))
    <div className="App">
      <button
        style={style}
        onClick={() => togglePersonHandler()}>Switch Name</button>
      {persons}
    </div>
  );
}
export default App;
