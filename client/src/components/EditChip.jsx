import React, { Component } from 'react';

class EditChirp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            chirp: ''
        }
    }

    async componentDidMount() {
        try {
            let res = await fetch(`/api/chirps/${this.props.match.params.id}`)
            let data = await res.json();
            this.setState({
                username: data.username,
                chirp: data.chirp
            })
            console.log(data)
        } catch (e) {
            console.log(e)
        }
    }

    async handleEdit(e) {
        e.preventDefault();
        try {
            let res = await fetch(`/api/chirps/${this.props.match.params.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state)
            })
            this.props.history.replace(`/chirp/${this.props.match.params.id}`)
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        return (
            <>
                <form>
                    <div className="form-group">
                        <label>Username:</label>
                        <input type="text" className="form-control" placeholder="Enter Username" value={this.state.username} onChange={(e) => this.setState({ username: e.target.value })} />
                    </div>
                    <div className="form-group">
                        <label>Chirp:</label>
                        <input type="text" className="form-control" placeholder="Chirp It Here" value={this.state.chirp} onChange={(e) => this.setState({ chirp: e.target.value })} />
                    </div>
                    <button type="submit" className="btn btn-dark" onClick={(e) => this.handleEdit(e)}>Edit</button>
                </form>
            </>
        )
    }
}

export default EditChirp;