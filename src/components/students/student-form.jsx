import React, { Component } from 'react';
import { Label } from 'semantic-ui-react'
class StudentForm extends Component {
    constructor() {
        super();
        this.state = {
            studentNo: '',
            studentName: '',
            studentMarks: ''
        }
    }
    handleChange = (e) => {
        // console.log(e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addStudent(this.state)
        this.resetForm();

    }
    resetForm() {
        this.setState({
            studentName: '',
            studentMarks: ''
        })
    }
    render() {
        return (
            <div>
                <h3> Student Adding Deatails </h3>
                <form className="ui form" onSubmit={this.handleSubmit} >
                    <div className="field">
                        <Label>Student Name</Label><br/><br/>
                        <input type="text" name="studentName"
                            onChange={this.handleChange}
                            placeholder="student name" value={this.state.studentName} />
                    </div>
                    <div className="field">
                        <Label>Student Marks</Label><br/><br/>
                        <input type="text" name="studentMarks"
                            onChange={this.handleChange}
                            placeholder="student marks" value={this.state.studentMarks} />
                    </div>
                    <button className="ui button" type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default StudentForm;