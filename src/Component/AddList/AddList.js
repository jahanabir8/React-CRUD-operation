import React from 'react';

const AddList = () => {
    return (
        <div>
            <form>
                <div className='form-floating mb-3'>
                    <input type="text" class="form-control" id="id" placeholder="Enter Priority" />
                    <label for="id">Email address</label>
                </div>
            </form>
        </div>
    );
};

export default AddList;