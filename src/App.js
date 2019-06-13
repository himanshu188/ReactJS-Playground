import React, { Component } from 'react';
import logo from './logo.svg';
import classes from './App.css';
import Person from './Person/Person';
class App extends Component{

  state = {
    persons: [
      { name: 'himanshu', age:23},
      { name: 'john', age:24}
    ],
    showPersons: false
  }

  // const [ otherState, setOtherState] = useState('any value');
  deletePersonHandler = (personIndex) => {
      const persons = this.state.persons.slice();
      persons.splice(personIndex, 1);
      this.setState({persons: persons})
  }
  nameChangeHandler = (event, index) => {
    const personIndex = this.state.persons.findIndex(
      p => {
        return p.index === index;
      }
    )
    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;
    const persons = [...this.state.persons];
    person[personIndex] = person
    this.setState({ persons: persons})
  }
  togglePersonHandler = () => {
      const doesShow = this.state.showPersons
      this.setState({showPersons: !doesShow});
  }
  render(){

    // React.createElement('div', null, React.createElement('h1', null, 'Hi, This is my First React App'))
    let persons = null;
    let btnClass = '';
    if(this.state.showPersons)
    {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
              return <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={index}
                changed ={(event) => this.nameChangeHandler(event, index)}/>
          })}
        </div>
      );
      btnClass = classes.Red;
    }

    const assignedClasses = [];

    if(this.state.persons.length <= 2){
      assignedClasses.push(classes.red);
    }
    if(this.state.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }

    return (

        <div className={classes.App}>
          <h1>Hi, This is My React Playground</h1>
          <p className={assignedClasses.join(' ')}> That's working great!</p>
          <button
            className={btnClass}
            onClick={() => this.togglePersonHandler()}>Toggle Switch</button>
            {persons}
        </div>

  );
  }
}
export default App;
