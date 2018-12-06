
/// onclicks or on button push for game event listeners
/// render the game
import React, { Component } from 'react';
import { createChat } from '../actions';
import { connect } from 'react-redux';



class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chat: []
        }
    };


    render() {
        return (
            <div>
                <Chat chat={this.state.Chat} />
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        errorMessage: state.error,
        message: state.message,
        chat: state.chat
    };
}


export default connect(mapStateToProps, { createChat })(Chat);