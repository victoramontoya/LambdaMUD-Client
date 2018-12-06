
/// onclicks or on button push for game event listeners
/// render the game

import React, { Component } from 'react';
import { moveAdventure } from '../actions';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';



class Adventure extends Component {
    constructor(props) {
        super(props);
        this.state = {
            adventure: []
        }
    };


    handleMove = (e) => {
        e.preventDefault();
        this.props.moveAdventure(this.state);
    };

    render() {
        return (
            <div>
                <Adventure adventure={this.state.Adventure}/>
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


export default connect(mapStateToProps, { moveAdventure })(Adventure);