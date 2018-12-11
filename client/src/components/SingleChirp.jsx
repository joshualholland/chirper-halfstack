import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'isomorphic-fetch';
import 'es6-promise';

class SingleChirp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            chirp: {}
        };
    }

    async componentDidMount() {
        try {
            let res = await fetch(`/api/chirps/${this.props.match.params.id}`);
            let chirp = await res.json();
            this.setState({ chirp })
        } catch (e) {
            console.log(e)
        }
    }

    async deleteChirp() {
        try {
            let res = await fetch(`/api/chirps/${this.props.match.params.id}`, {
                method: 'DELETE'
            });
            this.props.history.replace('/')
        } catch (e) {
            console.log(e)
        }
    }



    render() {
        return (
            <div className="col-md-12">
                <div className="card text-success bg-secondary m-1 p-1 border-dark">
                    <div className="card-header text-center">{this.state.chirp.username} chirped:</div>
                    <h1 className='text-center'>{this.state.chirp.chirp}</h1>
                    <button className="btn btn-sm btn-danger" onClick={() => this.deleteChirp()}>Delete Chirp</button>
                    <Link className="btn btn-sm btn-success" to={`/edit/${this.props.match.params.id}`}>Edit Chirp</Link>
                    <Link className="btn btn-sm btn-primary" to='/'>Back To all chirps</Link>
                </div>
            </div>
        )
    };

}

export default SingleChirp;