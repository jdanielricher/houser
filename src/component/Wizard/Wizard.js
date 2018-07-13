import React, { Component } from 'react';

class Wizard extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: ''
        };
    }

    handleName = val => {
        this.setState({
            name: val
        });
    };

    handleAddress = val => {
        this.setState({
            address: val
        });
    };

    handleCity = val => {
        this.setState({
            city: val
        });
    };

    handleState = val => {
        this.setState({
            state: val
        });
    };

    handleZipCode = val => {
        this.setState({
            zipcode: val
        });
    };

    render() {
        return (
            <div>
                Wizard
                <button> Cancel </button>

                <input
                    placeholder="type name here"
                    onChange={e => this.handleName(e.target.value)}
                />
                <input
                    placeholder="type address here"
                    onChange={e => this.handleAddress(e.target.value)}
                />

                <input
                    placeholder="city"
                    onChange={e => this.handleCity(e.target.value)}
                />
            </div >
        )
    }
}

export default Wizard;