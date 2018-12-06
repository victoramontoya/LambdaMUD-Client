import React, { Component } from 'react';
import axios from 'axios';

import { Button } from 'reactstrap';
import { moveAdventure } from '../actions';
import { connect } from 'react-redux';

class MoveCommands extends Component {
    state = {
        token: localStorage.getItem("token"),
        commandText: "",
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleCommand = event => {
        event.preventDefault();
        const { commandText } = this.state;
        let dir = ["n", "s", "e", "w"];
        this.moveAdventure(commandText) 
        this.setState({ commandText: "" })
    }
    
    render() {
        return (
            <div className="Command">
                <input
                    className="CommandInput"
                    value={this.state.commandText}
                    name="commandText"
                    onChange={this.handleChange}
                />
                <Button text="Send" event={this.handleCommand}> Move  </Button>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        errorMessage: state.error,
        room: state.room,
        uuid: state.uuid,
        name: state.name,
        description: state.description,
    };
}


export default connect(mapStateToProps, { moveAdventure })(MoveCommands);