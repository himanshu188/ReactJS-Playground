import React, { Component } from 'react';
import logo from '../logo.svg';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
// import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons'
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
    if(this.state.showPersons)
    {
      persons = <Persons persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
            />
    }
    return (
        <div className={classes.App}>
            <Cockpit showPersons={this.state.showPersons}
                persons = {this.state.persons}
                clicked = {this.togglePersonHandler}/>
            {persons}
        </div>

  );
  }
}
export default App;
