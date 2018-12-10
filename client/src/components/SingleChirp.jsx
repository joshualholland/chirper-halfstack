import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'isomorphic-fetch';
import 'es6-promise'; 

class SingleChirp extends Component {
    constructor(props) {
        super(props)
        this.state = {

        };
    }

    componentDidMount() {
        fetch(`/api/chirps/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(chirp => {
                this.setState({
                    id: this.props.match.params.id,
                    username: chirp.username,
                    chirp: chirp.chirp
                })
            }).catch((err) => {
                console.log(err)
            })
    };

    // deleteChirp() {

    // }

    render() {
        return (
            <div key={this.state.id} className="col-md-12">
                <div className="card text-success bg-secondary m-1 p-1 border-dark">
                    <div className="card-header text-center">{this.state.username} chirped:</div>
                    <h1 className='text-center'>{this.state.chirp}</h1>
                    {/* <Link to="/chirp/:id/edit" chirp={chirp}>Edit Chirp</Link> */}
                </div>
            </div>
        )
    };

}

export default SingleChirp;