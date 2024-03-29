import React, { Component } from 'react';
import logo from '../logo.svg';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
// import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons'
class App extends Component{
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }
  state = {
    persons: [
      { name: 'himanshu', age:23},
      { name: 'john', age:24}
    ],
    showPersons: false,
    showCockpit: true
  }
  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps');
    return state;
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }
  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
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
        return this.state.persons.indexOf(p) === index;
      }
    )
    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person
    this.setState({ persons: persons})
  }
  togglePersonHandler = () => {
      const doesShow = this.state.showPersons
      this.setState({showPersons: !doesShow});
  }
  render(){
    console.log('[App.js] render');
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
          <button
            onClick={() => {
              this.setState({showCockpit: false});
            }         }
            >Remove Cockpit</button>
          { this.state.showCockpit ? (<Cockpit
              title = {this.props.appTitle}
              showPersons={this.state.showPersons}
              personsLength = {this.state.persons.length}
              clicked = {this.togglePersonHandler}/>)
              : null
          }

            {persons}
        </div>

  );
  }
}
export default App;
