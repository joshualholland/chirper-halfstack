import React from 'react';
import { Link } from 'react-router-dom';

const ChirpCard = (props) => {
    return (
        <div className="col-md-12">
            <div className="mb-2">
                <div className="card text-white m-4 bg-light shadow p-3 mb-5 rounded" id="card-background">
                    <div className="card-header bg-success">
                        Chirp: {props.chirp.id}
                    </div>
                    <div className="card-body">
                        <h5 className="card bg-light text-center text-dark">{props.chirp.username} chirped:</h5>
                        <p className='text-center text-dark'>{props.chirp.chirp}</p>
                        <Link to={`/chirp/${props.chirp.id}`} className="btn btn-success btn-sm" style={{ display: 'block', width: 15 + '%' }}>See Chirp!</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ChirpCard;