import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userid: '',
            text: '',
        }
    }

    async handleSubmit(e) {
        e.preventDefault()
        try {
            await fetch('/api/chirps', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state)
            })
            this.props.history.replace('/');
        } catch(e) {
            console.log(e)
        }
    }


    render() {
        return (
            <>
                <div className="container-fluid">
                    <form className='p-4'>
                        <div className="form-group text-center text-success">
                            <label>Username</label>
                            <input
                                className="form-control text-center"
                                placeholder="Who's Chirpin'?"
                                onChange={(e) => this.setState({ userid: parseInt(e.target.value) })}
                                value={this.state.userid} />
                        </div>
                        <div className="form-group text-center">
                            <label className='text-success'>Chirp It!!!</label>
                            <input
                                className="form-control text-center"
                                placeholder="What've you got to say?"
                                onChange={(e) => this.setState({ text: e.target.value })}
                                value={this.state.text} />
                        </div>
                        <div className='col-12 text-center'>
                            <button type="submit" className="btn btn-success align-self-center" onClick={(e) => this.handleSubmit(e)}>Chirp</button>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}

export default Form;