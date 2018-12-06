
/// onclicks or on button push for game event listeners
/// render the game
import React, { Component } from 'react';
import { createChat } from '../../actions';
import { connect } from 'react-redux';
import Title from './Title';
import MessageList from './MessageList';
import SendMessageForm from './SendMessageForm';
import Pusher from 'pusher-js'


class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: []
        }
    };


    sendMessage = (message) => {
        this.props.createChat({
            message
        })
    }

        render() {
            return (
                <div className="chat">
                    <Title />
                    <MessageList messages={this.state.messages}/>
                    <SendMessageForm sendMessage={this.sendMessage}/>
                </div>
            )
        }
    }
function mapStateToProps(state) {
    return {
        errorMessage: state.error,
        // message: state.message,
        messages: state.messages

    };
}


export default connect(mapStateToProps, { createChat })(Chat);