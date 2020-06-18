import React, {useContext} from 'react';
import {SmurfContext} from '../contexts/SmurfContext'


const SmurfList = () => {
    const smurfs = useContext(SmurfContext)
    console.log(smurfs)

    return(
        <div id='smurfs'>
            {smurfs.smurfs.map(smurf => (
                <div className='smurfCard'>
                    <h2 key={smurf.id}>Name:{smurf.name}</h2>
                    <h2 key={smurf.id}>Age:{smurf.age}</h2>
                    <h2 key={smurf.id}>Height:{smurf.height}</h2>
                </div>
            ))}
        </div>
    )
}

export default SmurfList;