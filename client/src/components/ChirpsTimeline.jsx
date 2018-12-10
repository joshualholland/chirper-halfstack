import React, { Component } from 'react';
import ChirpCard from './ChirpCard'

class ChirpTimeline extends Component {
    constructor(props) {
        super(props)
        this.state = {
            chirps: []
        }
    }

    async componentDidMount() {
        try {
            let res = fetch('/api/chirps')
            let chirps = await JSON.parse(res);
            this.setState({ chirps: chirps })
        } catch (e) {
            console.log(e)
        }
    }

    returnCards() {
        return (
            Object.keys(this.state.chirps).map((chirp) => { 
                return (
                    <ChirpCard chirp={chirp} key={chirp.id} />
                )
            })
        )
    }

    render() {
        return (
            <div className="container">
                {this.returnCards()}
            </div>
        )
    };
}

export default ChirpTimeline;