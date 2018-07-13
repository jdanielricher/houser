import React, { Component } from 'react';
import House from '../House/House';

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            listOfHouses: ''
        };

        this.handleClick = this.handleClick.bind(this);

        handleClick = () =>
            console.log('It works', this);
    }

    render() {
        let loh = listOfHouses.map((e, i))
        return (
            <div> Dashboard
                <House />
                <button placeholder="Add New Property"
                    onClick={this.handleClick} />
            </div>
        );
    }
}

export default Dashboard;