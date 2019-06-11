import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
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
  switchNameHandler = (othervalue) => {
    this.setState({
      persons: [
      { name: 'patel', age:23},
      { name: othervalue, age:26}
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
      { name: event.target.value, age:23},
      { name: 'jonh', age:26}
      ]
    })
  }
  togglePersonHandler = () => {
      const doesShow = this.state.showPersons
      this.setState({showPersons: !doesShow});
  }
  render(){

    // React.createElement('div', null, React.createElement('h1', null, 'Hi, This is my First React App'))
    const style = {
      backgroundColor: 'silver',
      font: 'inherit',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPersons)
    {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            click={this.switchNameHandler.bind(this, 'sudhanshu')}
            changed={this.nameChangeHandler} />
          <Person
            name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: Hacking</Person>
        </div>
      );
    }
    return (
    <div className="App">
      <button
        style={style}
        onClick={() => this.togglePersonHandler()}>Switch Name</button>
        {persons}
      </div>
  );
  }
}
export default App;
