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
            let res = await fetch('/api/chirps')
            let data = await res.json();
            let chirpArray = Object.keys(data).map(key => {
                return{
                    id: key,
                    username: data[key].username,
                    chirp: data[key].chirp
                }
                
            })
            chirpArray.pop();
            this.setState({
                chirps: chirpArray
            });
        } catch (e) {
            console.log(e)
        }
    }

    returnCards() {
        return (
            this.state.chirps.map((chirp) => {
                console.log(chirp)
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