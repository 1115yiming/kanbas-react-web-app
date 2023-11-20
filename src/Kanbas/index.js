// import { Route, Routes, Navigate } from "react-router";
// import KanbasNavigation from "./KanbasNavigation";
// import Courses from "./Courses";
// //import Account from "./Account";
// import Dashboard from "./Dashboard";
// import db from "./Database";
// import { useState } from "react";
// import store from "./store";
// import { Provider } from "react-redux";
//
// function Kanbas() {
//     const [courses, setCourses] = useState(db.courses);
//     const [course, setCourse] = useState({
//                                              name: "New Course",
//                                              number: "New Number",
//                                              startDate: "2023-09-10",
//                                              endDate: "2023-12-15",
//                                          });
//     const addNewCourse = () => {
//         setCourses([
//                        ...courses,
//                        { ...course, _id: new Date().getTime().toString() },
//                    ]);
//     };
//     const deleteCourse = (courseId) => {
//         setCourses(courses.filter((course) => course._id !== courseId));
//     };
//     const updateCourse = () => {
//         setCourses(
//             courses.map((c) => {
//                 if (c._id === course._id) {
//                     return course;
//                 } else {
//                     return c;
//                 }
//             })
//         );
//     };
//
//     return (
//         <Provider store={store}>
//             <div className="d-flex">
//                 <KanbasNavigation />
//                 <div>
//                     <Routes>
//                         <Route path="/" element={<Navigate to="Dashboard" />} />
//
//                         <Route
//                             path="Dashboard"
//                             element={
//                                 <Dashboard
//                                     courses={courses}
//                                     course={course}
//                                     setCourse={setCourse}
//                                     addNewCourse={addNewCourse}
//                                     deleteCourse={deleteCourse}
//                                     updateCourse={updateCourse}
//                                 />
//                             }
//                         />
//                         <Route
//                             path="Courses/:courseId/*"
//                             element={<Courses courses={courses} />}
//                         />
//                         <Route path="Calendar" element={<h1>Calendar</h1>} />
//                     </Routes>
//                 </div>
//             </div>
//         </Provider>
//     );
// }
// export default Kanbas;

// import KanbasNavigation from "./KanbasNavigation";
// import { Route, Routes, Navigate } from "react-router";
// import Courses from "./Courses";
// //import Account from "./Account";
// import Dashboard from "./Dashboard";
// import db from "./Database";
// import { useState, useEffect } from "react";
// import store from "./store";
// import { Provider } from "react-redux";
// import axios from "axios";
//
// function Kanbas() {
//     const [courses, setCourses] = useState([]);
//     // const URL = "http://localhost:4000/api/courses";
//     const URL = "https://kanbas-node-server-app-n6ef.onrender.com/api/courses";
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
//     const addCourse = async () => {
//         const response = await axios.post(URL, course);
//         // setCourses([
//         //                response.data,
//         //                ...courses,
//         //            ]);
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
//
//     return (
//         <Provider store={store}>
//             <div className="d-flex">
//                 <KanbasNavigation />
//                 <div>
//                     <Routes>
//
//                         {/*<Route path="Account" element={<Account />} />*/}
//                         <Route path="Dashboard" element={<Dashboard
//                             courses={courses}
//                             course={course}
//                             setCourse={setCourse}
//                             addNewCourse={addCourse}
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
import { Route, Routes, Navigate } from "react-router";
import Courses from "./Courses";
import Dashboard from "./Dashboard";
import { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";

function Kanbas() {
    const [courses, setCourses] = useState([]);
    const URL = "https://kanbas-node-server-app-9wsk.onrender.com/api/courses";
    const findAllCourses = async () => {
        const response = await axios.get(URL);
        setCourses(response.data);
    };
    useEffect(() => {
        findAllCourses();
    }, []);

    const [course, setCourse] = useState({
                                             name: "New Course", number: "New Number",
                                             startDate: "2023-09-10", endDate: "2023-12-15",
                                         });

    const addNewCourse = async () => {
        await axios.post(URL, course);
        setCourses([course, ...courses]);
        setCourse({ name: "" });
    };


    const deleteCourse = async (courseId) => {
        try {
            await axios.delete(`${URL}/${courseId}`);
            setCourses(courses.filter(course => course._id !== courseId));
        } catch (error) {
            console.error("Error deleting course:", error);
        }
    };

    const updateCourse = async () => {
        const response = await axios.put(`${URL}/${course._id}`, course);
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return course;
                }
                return c;
            })
        );
        setCourse({ name: "" });
    };

    return (
        <Provider store={store}>
            <div className="d-flex">
                <KanbasNavigation />
                <div>
                    <Routes>

                        <Route path="Dashboard" element={<Dashboard
                            courses={courses}
                            course={course}
                            setCourse={setCourse}
                            addNewCourse={addNewCourse}
                            deleteCourse={deleteCourse}
                            updateCourse={updateCourse} />} />
                        <Route path="Courses/:courseId/*" element={<Courses courses={courses} />} />
                        <Route path="Calendar" element={<h1>Calendar</h1>} />
                    </Routes>
                </div>
            </div>
        </Provider>
    );
}
export default Kanbas;