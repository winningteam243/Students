import React from 'react'

function StudentDetails(props) {
    return (
        <div>
            <div className="ui cards">
                <div className="card">
                    <div className="content">
                        <div className="header">{props.studentdeatils.studentName}</div>
                        <div className="meta"> Student No :  {props.studentdeatils.studentNo}</div>
                        <div className="description">
                            <p>  Student Name: <b>{props.studentdeatils.studentName} </b></p>
                            <p>  Student Marks :<b> {props.studentdeatils.studentMarks} </b> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentDetails;