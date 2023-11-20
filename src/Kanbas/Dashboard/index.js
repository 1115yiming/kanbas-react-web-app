import React, {useState } from "react";
//import db from "../Database";
import { Link } from "react-router-dom";
function Dashboard({
                       courses,
                       course,
                       setCourse,
                       addNewCourse,
                       deleteCourse,
                       updateCourse,
                   }) {
    return (
        <div className="container mt-4">
            <h1>Dashboard</h1>
            <div className="mb-3">
                <label className="form-label">Course Name</label>
                <input
                    value={course.name}
                    className="form-control"
                    onChange={(e) => setCourse({ ...course, name: e.target.value })}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Course Number</label>
                <input
                    value={course.number}
                    className="form-control"
                    onChange={(e) => setCourse({ ...course, number: e.target.value })}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Start Date</label>
                <input
                    value={course.startDate}
                    className="form-control"
                    type="date"
                    onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">End Date</label>
                <input
                    value={course.endDate}
                    className="form-control"
                    type="date"
                    onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
                />
            </div>
            <button className="btn btn-primary" onClick={addNewCourse}>
                {course._id != null ? 'Update' : 'Add'}
            </button>


            <hr />
            <h2>Published Courses ({courses.length})</h2>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                {courses.map((course, index) => (
                    <div className="col" key={course._id}>
                        <div className="card">
                            <img
                                src={`./Dashboard.jpeg`}
                                className="card-img-top"
                                alt="..."
                            />

                                <div className="card-body">
                                    <button
                                        className="btn btn-sm btn-secondary me-2"
                                        onClick={(event) => {
                                            event.preventDefault();
                                            setCourse(course);
                                        }}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="btn btn-sm btn-danger"
                                        onClick={(event) => {
                                            event.preventDefault();
                                            deleteCourse(course._id);
                                        }}
                                    >
                                        Delete
                                    </button>
                                <h5 className="card-title">{course.name}</h5>
                                <Link
                                    to={`/Kanbas/Courses/${course._id}`}
                                    className="btn btn-primary"
                                >
                                    {course.name}
                                </Link>
                                <p class="card-text">
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </p>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
        </div>
    );
}

export default Dashboard;


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import db from "../Database";
// import 'bootstrap/dist/css/bootstrap.min.css';
//
// function Dashboard(
//     { courses, course, setCourse, addCourse,
//         deleteCourse, updateCourse }
//
// ) {
//     return (
//         <div className="container mt-4">
//             <h1>Dashboard</h1>
//             <div className="mb-3">
//                 <label className="form-label">Course Name</label>
//                 <input
//                     value={course.name}
//                     className="form-control"
//                     onChange={(e) => setCourse({ ...course, name: e.target.value })}
//                 />
//             </div>
//             <div className="mb-3">
//                 <label className="form-label">Course Number</label>
//                 <input
//                     value={course.number}
//                     className="form-control"
//                     onChange={(e) => setCourse({ ...course, number: e.target.value })}
//                 />
//             </div>
//             <div className="mb-3">
//                 <label className="form-label">Start Date</label>
//                 <input
//                     value={course.startDate}
//                     className="form-control"
//                     type="date"
//                     onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
//                 />
//             </div>
//             <div className="mb-3">
//                 <label className="form-label">End Date</label>
//                 <input
//                     value={course.endDate}
//                     className="form-control"
//                     type="date"
//                     onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
//                 />
//             </div>
//             <button className="btn btn-primary" onClick={addCourse}>
//                 {course._id != null ? 'Update' : 'Add'}
//             </button>
//
//             <div className="list-group mt-4">
//                 {courses.map((course) => (
//                     <Link
//                         key={course._id}
//                         to={`/Kanbas/Courses/${course._id}`}
//                         className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
//                     >
//                         <span>{course.name}</span>
//                         <div>
//                             <button
//                                 className="btn btn-sm btn-secondary me-2"
//                                 onClick={(event) => {
//                                     event.preventDefault();
//                                     setCourse(course);
//                                 }}
//                             >
//                                 Edit
//                             </button>
//                             <button
//                                 className="btn btn-sm btn-danger"
//                                 onClick={(event) => {
//                                     event.preventDefault();
//                                     deleteCourse(course._id);
//                                 }}
//                             >
//                                 Delete
//                             </button>
//                         </div>
//                     </Link>
//                 ))}
//             </div>
//         </div>
//     );
// }
//
// export default Dashboard;