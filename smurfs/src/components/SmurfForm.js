import React, { useContext, useState } from 'react';
import { SmurfContext } from '../contexts/SmurfContext';
import axios from 'axios';


function SmurfForm() {
    const { addSmurf } = useContext(SmurfContext)
    const [newSmurf, setNewSmurf] = useState({
        name:'',
        age:'',
        height:'',
        id: ''
    });

    const handleChange = e => {
        const name = e.target.name;
        setNewSmurf({
            ...newSmurf,
            [name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        addSmurf(newSmurf)
        axios.post('http://localhost:3333/smurfs', newSmurf)
            .then(res => setNewSmurf(res.data))
            .catch(err => console.log(err))
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='name'
                    placeholder='Smurf Name'
                    value={newSmurf.name}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name='height'
                    placeholder='Smurf Height'
                    value={newSmurf.height}
                    onChange={handleChange}
                />
                <input
                    type='number'
                    name='age'
                    placeholder='Smurf Age'
                    value={newSmurf.age}
                    onChange={handleChange}
                />
                <button>Add New Smurf</button>
            </form>
        </div>
    )
}

export default SmurfForm;