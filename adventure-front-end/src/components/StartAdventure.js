
/// onclicks or on button push for game event listeners
/// render the game
import React, { Component } from 'react';
import { createAdventure } from '../actions';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';



class StartAdventure extends Component {
    constructor(props) {
        super(props);
        this.state = {
            adventure: []
        }
    };

    // handleChange = e => {
    //     this.setState({ [e.target.name]: e.target.value });
    // }

    handleAdventure = (e) => {
        e.preventDefault();
        this.props.createAdventure(this.state);
    };

    handleChat = e => {
        e.preventDefault();
        console.log(this.state);
        this.props.startChat(this.state);
    }

    render() {
        return (
            <div>
                <Button onKeyPress={this.handleAdventure} >
                    Start Your Adventure
                </Button>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        errorMessage: state.error,
        message: state.message,
        adventure: state.adventure
    };
}


export default connect(mapStateToProps, { createAdventure })(StartAdventure);