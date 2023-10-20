import React from "react";
import db from "../../Database";
import { useParams } from "react-router-dom";

function Grades() {
    const { courseId } = useParams();
    const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
    const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);

    return (
        <div>
            <h1>Grades</h1>

            <div className="col-md-3">
                <h3>Student Names</h3>
                <input
                    title="Type the name of the student to search for"
                    className="form-control mb-2"
                    placeholder="Search Students"
                />

                <h3>Assignment Names</h3>
                <input
                    title="Type the name of the assignment to search for"
                    className="form-control mb-2"
                    placeholder="Search Assignments"
                />

                <button className="btn btn-primary mb-2">Apply Filters</button>
            </div>

            <div className="col-md-9">
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>Student Name</th>
                        {assignments.map((assignment) => (
                            <th key={assignment._id}>{assignment.title}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {enrollments.map((enrollment) => {
                        const user = db.users.find((user) => user._id === enrollment.user);

                        return (
                            <tr key={enrollment.user}>
                                <td>{user.firstName} {user.lastName}</td>
                                {assignments.map((assignment) => {
                                    const grade = db.grades.find(
                                        (grade) => grade.student === enrollment.user && grade.assignment === assignment._id
                                    );
                                    return <td key={assignment._id}>{grade?.grade || ""}</td>;
                                })}
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Grades;

