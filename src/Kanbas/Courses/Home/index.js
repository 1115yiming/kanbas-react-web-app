import ModuleList from "../Modules/ModuleList";
import React from "react";


function Home() {
    return (
        <div className="row">
            <div className="col-10">
                <h2>Home</h2>
                <ModuleList />
            </div>
            <div className="col-2 ml-100">
                <h2>Status</h2>
                <button className="btn btn-light d-block mb-2">Import Existing Content</button>
                <button className="btn btn-light d-block mb-2">Import from Commons</button>
                <button className="btn btn-light d-block mb-2">Choose Home Page</button>
                <button className="btn btn-light d-block mb-2">View Course Stream</button>
                <button className="btn btn-light d-block mb-2">New Announcement</button>
                <button className="btn btn-light d-block mb-2">New Analytics</button>
                <button className="btn btn-light d-block mb-2">View Course Notifications</button>
            </div>
        </div>
    );
}
export default Home;