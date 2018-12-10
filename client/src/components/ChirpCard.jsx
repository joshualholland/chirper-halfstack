import React from 'react';
import { Link } from 'react-router-dom';

const ChirpCard = (props) => {
    return (
        <div className="col-md-12">
            <div className="card-header">
                Chirp Number: {props.chirp.id}
            </div>
            <div className="card text-success bg-secondary m-1 p-1 border-dark">
                <div className="card-header text-center">{props.chirp.username} chirped:</div>
                <h1 className='text-center'>{props.chirp.chirp}</h1>
            </div>
        </div>
    )
}


export default ChirpCard;