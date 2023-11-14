import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const EditList = ({list}) => {
  const [updateList, setUpdateList] = useState(list)

  const handleUpdateId = (e) =>{
    setUpdateList({...updateList, id: e.target.value})
  }
  const handleUpdateName = (e) =>{
    setUpdateList({...updateList, name: e.target.value})
  }
  const handleUpdateDep = (e) =>{
    setUpdateList({...updateList, department: e.target.value})
  }

  return (
    <tr>
      <td>
        <div className="input-group">
            <input className="form-control" name="id" onChange={handleUpdateId} type="text" value={updateList.id}/>
        </div>
      </td>
      <td>
        <div className="input-group">
            <input className="form-control" name="name" onChange={handleUpdateName} type="text" value={updateList.name}/>
        </div>
      </td>
      <td>
        <div className="input-group">
            <input className="form-control" name="department" onChange={handleUpdateDep} type="text" value={updateList.department}/>
        </div>
      </td>
      
      <td><button className="btn btn-primary">Update</button></td>
    </tr>
  );
};

export default EditList;
