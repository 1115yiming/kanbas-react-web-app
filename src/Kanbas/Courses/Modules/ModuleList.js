/*import React, { useState } from "react";
import { useParams } from "react-router-dom";
//import db from "../../Database";
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
} from "./modulesReducer";

function ModuleList() {
    const { courseId } = useParams();
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();

    return (
        <ul className="list-group">
            <li className="list-group-item">
                <button
                    onClick={() => dispatch(addModule({ ...module, course: courseId }))}
                >
                    Add
                </button>
                <button onClick={() => dispatch(updateModule(module))}>Update</button>

                <input
                    value={module.name}
                    onChange={(e) =>
                        dispatch(setModule({ ...module, name: e.target.value }))
                    }
                />
                <textarea
                    value={module.description}
                    onChange={(e) =>
                        dispatch(setModule({ ...module, description: e.target.value }))
                    }
                />
            </li>

            {modules
                .filter((module) => module.course === courseId)
                .map((module, index) => (
                    <li key={index} className="list-group-item">
                        <button onClick={() => dispatch(deleteModule(module._id))}>
                            Delete
                        </button>
                        <button onClick={() => dispatch(setModule(module))}>Edit</button>

                        <h3>{module.name}</h3>
                        <p>{module.description}</p>
                        {module.lessons && (
                            <ul className="list-group">
                                {module.lessons.map((lesson, index) => (
                                    <li key={index} className="list-group-item">
                                        <h4>{lesson.name}</h4>
                                        <p>{lesson.description}</p>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
        </ul>
    );
}
export default ModuleList;

 */



import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
} from "./modulesReducer";

function ModuleList() {
    const { courseId } = useParams();
    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();

    return (
        <div className="container mt-5">
            <div className="d-flex mb-3">
                <button
                    className="btn btn-light me-2"
                    onClick={() => dispatch(addModule({ ...module, course: courseId }))}
                >
                    Add Module
                </button>
                <button
                    className="btn btn-light me-2"
                    onClick={() => dispatch(updateModule(module))}
                >
                    Update Module
                </button>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="module-name">
                            Module Name
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter module name"
                            aria-label="ModuleName"
                            aria-describedby="module-name"
                            value={module.name}
                            onChange={(e) =>
                                dispatch(setModule({ ...module, name: e.target.value }))
                            }
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="module-description">
                            Module Description
                        </span>
                        <textarea
                            className="form-control"
                            aria-label="With textarea"
                            placeholder="Enter module description"
                            value={module.description}
                            onChange={(e) =>
                                dispatch(setModule({ ...module, description: e.target.value }))
                            }
                        ></textarea>
                    </div>
                </div>
            </div>

            <ul className="list-group">
                {modules
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <li key={index} className="list-group-item mb-3">
                            <button
                                className="btn btn-danger me-2"
                                onClick={() => dispatch(deleteModule(module._id))}
                            >
                                Delete
                            </button>
                            <button
                                className="btn btn-primary"
                                onClick={() => dispatch(setModule(module))}
                            >
                                Edit
                            </button>

                            <h3 className="mt-3">{module.name}</h3>
                            <p>{module.description}</p>
                            {module.lessons && (
                                <ul className="list-group mt-3">
                                    {module.lessons.map((lesson, index) => (
                                        <li key={index} className="list-group-item">
                                            <h4>{lesson.name}</h4>
                                            <p>{lesson.description}</p>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
            </ul>
        </div>
    );
}

export default ModuleList;

