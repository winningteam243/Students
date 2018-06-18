import React, { Component } from 'react';
import StudentDetails from './student-details'
import StudentForm from './student-form'
import { Table } from 'semantic-ui-react'

class StudentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "Students": [
                {
                    studentNo: 1,
                    studentName: 'abc',
                    studentMarks: 50,
                },
                {
                    studentNo: 2,
                    studentName: 'def',
                    studentMarks: 65,
                },
                {
                    studentNo: 3,
                    studentName: 'ghi',
                    studentMarks: 85,
                },
                {
                    studentNo: 4,
                    studentName: 'jkl',
                    studentMarks: 75,
                },
                {
                    studentNo: 5,
                    studentName: 'mno',
                    studentMarks: 80,
                }
            ],
            selectedStudentDeatails: null,
            latestId: 6
        }
    }
    selectedDetails = (selectedStudent) => {
        console.log("Select student is", selectedStudent);
        this.setState({
            selectStudentDetails: selectedStudent
        })

    }
    getStudent = (newstudent) => {
        console.log('getting from child component student deatails', newstudent)
        let newStudent = Object.assign({}, newstudent, { studentNo: this.state.latestId })
        let newStudentList = [...this.state.Students, newStudent]
        this.setState({
            Students: newStudentList,
            latestId: this.state.latestId + 1
        })

    }
    render() {
        return (
            <div className="ui grid">
                <h3 className="App">Student List here </h3>
                <Table className="ui celled table">
                    <thead>
                        <tr>
                            <th>Student No</th>
                            <th>Student Name</th>
                            <th>Student Marks</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.Students.map(student =>
                            <tr key={student.studentNo} >

                                <td><div class="ui ribbon label">{student.studentNo}</div></td>
                                <td>{student.studentName}</td>
                                <td>{student.studentMarks} </td>
                                <td>
                                    <button className="ui primary button"
                                        onClick={() => this.selectedDetails(student)}
                                    >ShowDetails</button>
                                </td>
                            </tr>
                        )}


                    </tbody>
                </Table>
                <div className="row">
                    <div className="two wide column">
                        {this.state.selectStudentDetails && <StudentDetails studentdeatils={this.state.selectStudentDetails} />}
                    </div>
                    <div className="two wide column">
                        <StudentForm addStudent={this.getStudent} />
                    </div>
                </div>

            </div>
        );
    }
}

export default StudentList;