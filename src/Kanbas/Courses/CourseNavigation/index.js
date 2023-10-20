import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css";

function CourseNavigation() {
    const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments",
                   "Quizzes", "Grades", "People", "Panopto Video", "Discussions", "Announcements",
                   "Pages", "Pages", "Files", "Rubics", "Outcomes", "Collaborations", "Syllabus", "Settings"];
    const { courseId } = useParams();
    const { pathname } = useLocation();

    // Helper function to create a URL-friendly string
    const createUrlFriendlyString = (str) => str.replace(/\s+/g, '-').toLowerCase();

    return (
        <div className="wd-course-navigation list-group" style={{ width: 150 }}>
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={`/Kanbas/Courses/${courseId}/${createUrlFriendlyString(link)}`}
                    className={`list-group-item ${pathname.includes(createUrlFriendlyString(link)) && "active"}`}
                >
                    {link}
                </Link>
            ))}
        </div>
    );
}

export default CourseNavigation;
