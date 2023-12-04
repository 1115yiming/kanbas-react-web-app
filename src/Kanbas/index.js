
// import KanbasNavigation from "./KanbasNavigation";
// import { Route, Routes, Navigate } from "react-router";
// import Courses from "./Courses";
// import Dashboard from "./Dashboard";
// import { useState, useEffect } from "react";
// import store from "./store";
// import { Provider } from "react-redux";
// import axios from "axios";
//
// function Kanbas() {
//     const [courses, setCourses] = useState([]);
//     const URL = "https://kanbas-node-server-app-9wsk.onrender.com/api/courses";
//     const findAllCourses = async () => {
//         const response = await axios.get(URL);
//         setCourses(response.data);
//     };
//     useEffect(() => {
//         findAllCourses();
//     }, []);
//
//     const [course, setCourse] = useState({
//                                              name: "New Course", number: "New Number",
//                                              startDate: "2023-09-10", endDate: "2023-12-15",
//                                          });
//
//     const addNewCourse = async () => {
//         await axios.post(URL, course);
//         setCourses([course, ...courses]);
//         setCourse({ name: "" });
//     };
//
//
//     const deleteCourse = async (courseId) => {
//         try {
//             await axios.delete(`${URL}/${courseId}`);
//             setCourses(courses.filter(course => course._id !== courseId));
//         } catch (error) {
//             console.error("Error deleting course:", error);
//         }
//     };
//
//     const updateCourse = async () => {
//         const response = await axios.put(`${URL}/${course._id}`, course);
//         setCourses(
//             courses.map((c) => {
//                 if (c._id === course._id) {
//                     return course;
//                 }
//                 return c;
//             })
//         );
//         setCourse({ name: "" });
//     };
//
//     return (
//         <Provider store={store}>
//             <div className="d-flex">
//                 <KanbasNavigation />
//                 <div>
//                     <Routes>
//
//                         <Route path="Dashboard" element={<Dashboard
//                             courses={courses}
//                             course={course}
//                             setCourse={setCourse}
//                             addNewCourse={addNewCourse}
//                             deleteCourse={deleteCourse}
//                             updateCourse={updateCourse} />} />
//                         <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
//                         <Route path="Calendar" element={<h1>Calendar</h1>} />
//                     </Routes>
//                 </div>
//             </div>
//         </Provider>
//     );
// }
// export default Kanbas;

import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
// import './index.css';
import {useEffect, useState} from "react";
import db from "./Database";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";
import Signin from "./users/signin";
import Account from "./users/account";
import UserTable from "./users/table";
import Signup from "./users/signup";


function Kanbas() {
    const [courses, setCourses] = useState([]);
    const [course, setCourse] = useState({
                                             name: "New Course",      number: "New Number",
                                             startDate: "2023-09-10", endDate: "2023-12-15",
                                         });

    const API_BASE = process.env.REACT_APP_API_BASE;
    const URL = `${API_BASE}/courses`;
    const findAllCourses = async () => {
        const response = await axios.get(URL);
        setCourses(response.data);
    };
    useEffect(() => {
        findAllCourses();
    }, []);

    const addNewCourse = async () => {
        const response = await axios.post(URL, course);

        setCourses([
                       response.data,
                       ...courses,
                   ]);

        setCourse({
                      name: "New Course",      number: "New Number",
                      startDate: "2023-09-10", endDate: "2023-12-15",
                  })
    };

    const deleteCourse = async (courseId) => {
        const response = await axios.delete(
            `${URL}/${courseId}`
        );

        setCourses(courses.filter((course) => course._id !== courseId));
    };
    const updateCourse = async () => {
        const response = await axios.put(
            `${URL}/${course._id}`,
            course
        );

        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return course;
                } else {
                    return c;
                }
            })
        );
        setCourse({
                      name: "New Course",      number: "New Number",
                      startDate: "2023-09-10", endDate: "2023-12-15",
                  })
    };


    return (
        <Provider store={store}>
            <div>
                <KanbasNavigation />
                <div className="margin-left" style={{width:"100%","margin-left": "85px"}}>
                    <Routes>
                        <Route path="/signin" element={<Signin />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/" element={<Navigate to="Dashboard" />} />
                        <Route path="Account" element={<Account/>} />
                        <Route path="/Account/:id" element={<Account />} />

                        <Route path="/admin/users" element={<UserTable />} />

                        <Route path="Dashboard" element={
                            <Dashboard
                                courses={courses}
                                course={course}
                                setCourse={setCourse}
                                addNewCourse={addNewCourse}
                                deleteCourse={deleteCourse}
                                updateCourse={updateCourse}/>
                        } />
                        <Route path="Courses/:courseId/*" element={
                            <Courses courses={courses}/>} />
                    </Routes>
                </div>
            </div>
        </Provider>

    );
}
export default Kanbas;