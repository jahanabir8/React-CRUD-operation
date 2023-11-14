import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import EditList from "../EditList/EditList";

const List = ({ lists, setLists }) => {
    const [updateState, setUpdateState] = useState(-1)
    const handleEdit = (id) =>{
        setUpdateState(id)
    }

    const handleUpdate = (e) =>{
        e.preventDefault()
        const id = e.target.elements.id.value
        const name = e.target.elements.name.value
        const department = e.target.elements.department.value
        const update = lists.map(li => li.id === updateState ? {...li, id, name, department} : li) 
        setLists(update)
        setUpdateState(-1)
        console.log('upd')
    }

    return (
        <form onSubmit={handleUpdate}>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Buttons</th>
                </tr>
                </thead>
                <tbody>
                {lists.map((list, index) => {
                    return (
                        updateState === list.id ? <EditList list={list}/> :
                        <tr key={index}>
                            <td>{list.id}</td>
                            <td>{list.name}</td>
                            <td>{list.department}</td>
                            <td className="d-flex gap-3 justify-content-center">
                            <button className="btn btn-primary" onClick={()=>handleEdit(list.id)}>Edit</button>
                            <button className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </form>
    );
};

export default List;
