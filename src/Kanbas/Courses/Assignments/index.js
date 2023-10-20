import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { BsPlus, BsThreeDotsVertical } from 'react-icons/bs';

function Assignments() {
    const { courseId } = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId
    );

    return (
        <div className="container mt-5">
            <div className="mb-3">

                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search for Assignment" />
                    <button className="btn btn-light"><BsPlus /> Group</button>
                    <button className="btn btn-danger mx-2"><BsPlus /> Assignment</button>
                    <button className="btn btn-light"><BsThreeDotsVertical /></button>
                </div>
            </div>
            <div className="list-group">
                <h5>Assignments for course {courseId}</h5>
                {courseAssignments.map((assignment) => (
                    <Link
                        key={assignment._id}
                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                        className="list-group-item list-group-item-action with-border"
                    >
                        <div className="content-text">
                            {assignment.title}
                            <div className="sub-text">{assignment.description}</div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Assignments;


