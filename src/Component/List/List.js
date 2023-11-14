import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const List = ({lists}) => {
    return (
        <form>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Buttons</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        lists.map((list, index) =>{
                            return (
                                <tr key={index}>
                                    <td>{list.id}</td>
                                    <td>{list.name}</td>
                                    <td>{list.department}</td>
                                    <td><button className='btn btn-primary'>Edit</button> <button className='btn btn-danger'>Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </form>
    );
};

export default List;