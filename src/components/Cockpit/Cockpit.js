import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const Cockpit = props => {

  // useEffect(() => {
  //   console.log('[Cockpit.js] useEffect');
  //   setTimeout(() => {
  //     alert('Saved data to cloud');
  //   },1000)
  // },[props.persons]);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return() => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    }
  });
  const assignedClasses = [];
  let btnClass ='';
  if (props.showPersons) {
      btnClass = classes.Red;
  }

  if(props.personsLength <= 2){
    assignedClasses.push(classes.red);
  }
  if(props.personsLength <= 1){
    assignedClasses.push(classes.bold);
  }

  return(
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}> That's working great!</p>
      <button
        className={btnClass}
        onClick={props.clicked}>Toggle Switch</button>
    </div>
  );
}

export default React.memo(Cockpit);
