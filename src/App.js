import React, { Component } from 'react';
import './App.css';
import StudentList from './components/students/student-list'
import Home from './components/home/home'
// import StudentDetails from './components/students/student-details'
// import StudentForm from './components/students/student-form'
 
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
     
      <Router>
         
        <div className="ui container">
          <h2>Student Information</h2>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/students'>Students</Link></li>
           
          </ul>
          <Route exact path='/' component={Home} />
          <Route exact path='/students' component={StudentList} />

        </div>
      </Router>
    );
  }
}

export default App;
