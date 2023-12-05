// import { Link, useLocation } from "react-router-dom";
// import { BiUserCircle } from "react-icons/bi";
// import { RiDashboard3Fill } from "react-icons/ri";
// import { FaBook } from "react-icons/fa";
// import { BsFillCalendar2WeekFill } from "react-icons/bs";
// import { AiOutlineInbox } from "react-icons/ai"
// import { FaHistory } from "react-icons/fa"
// import { RiComputerLine } from "react-icons/ri"
// import { BsHouseFill } from "react-icons/bs"
// import { IoMdHelp } from "react-icons/io"
// import logo from './neu_logo.png';
// import "./index.css";
// function KanbasNavigation() {
//     const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
//
//     const linkToIconMap = {
//         Account: <BiUserCircle className="wd-icon" />,
//         Dashboard: <RiDashboard3Fill className="wd-icon" />,
//         Courses: <FaBook className="wd-icon" />,
//         Calendar: <BsFillCalendar2WeekFill className="wd-icon" />,
//         Inbox: <AiOutlineInbox className="wd-icon" />,
//         History: <FaHistory className="wd-icon" />,
//         Studio: <RiComputerLine className="wd-icon" />,
//         Commons: <BsHouseFill className="wd-icon" />,
//         Help: <IoMdHelp className="wd-icon" />,
//     };
//
//     const { pathname } = useLocation();
//     return (
//         <div className="list-group wd-kanbas-navigation" style={{ width: 85 }}>
//
//             <div className="list-group-item logo-container">
//                 <img src={logo} alt="Logo" className="logo" />
//             </div>
//
//             {links.map((link, index) => (
//                 <Link
//                     key={index}
//                     to={`/Kanbas/${link}`}
//                     className={`list-group-item ${pathname.includes(link) && "active"}`}
//                 >
//                     {linkToIconMap[link]}
//                     <br />
//                     {link}
//                 </Link>
//             ))}
//         </div>
//     );
// }
// export default KanbasNavigation;

import { Link, useLocation } from "react-router-dom";
// import './index.css';

function KanbasNavigation() {
    const links = ["Signin","Account", "Signup","Dashboard"];
    const icons = ["fa-regular fa-circle-user fa-xl","fa-regular fa-circle-user fa-xl","fa-solid fa-arrow-right-from-bracket fa-xl",
                   "fa-solid fa-gauge fa-xl","fa-solid fa-book fa-xl", "fa-solid fa-calendar-days fa-xl",
                   "fa-solid fa-inbox fa-xl", "fa-regular fa-clock fa-xl","fa-solid fa-film fa-xl",
                   "fa-solid fa-arrow-right-from-bracket fa-xl","fa-regular fa-circle-question fa-xl"];
    const { pathname } = useLocation();

    return (
        <div className="navigation hidden-1100">
            <ul className="ul">
                {links.map((link, index) => (
                    <li className={`${pathname.includes(link) && "active"}`}  key={index}>
                        <Link
                            key={index}
                            to={`/Kanbas/${link}`}
                        >
                            <div className="nav-icon-margin">
                                <i className={icons[index]}
                                   style={{color: link != "Account" || pathname.includes(link) ? "red" : "white"}}></i>
                            </div>
                            <div>
                                {link}
                            </div>

                        </Link>
                    </li>
                ))}
            </ul>
        </div>

    );
}
export default KanbasNavigation;