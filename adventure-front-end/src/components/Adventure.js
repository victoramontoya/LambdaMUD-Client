// Adventure.js
/// onclicks or on button push for game event listeners
/// render the game

import React, { Component } from 'react';
import { createAdventure } from '../actions';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import Room from './Room';
import Chat from './Room';
import Pusher from 'pusher-js'
import { createChat } from '../actions';
import MoveCommands from './MoveCommands';




class Adventure extends Component {
    // constructor(props) {
    //     super(props);
    //     // this.state = {
    //     //     adventure: [],
    //     //     loggedin: true,
    //     //     token: localStorage.getItem("token"),
    //     // }
    // };

    componentDidMount() {
        const { token } = this.state;
        if (token === null) {
            this.setState({ loggedOn: false })
            return
        }
        // Pusher.logToConsole = true;
        this.props.createAdventure(token)
        // this.loadGreetingMessage();
        // const pusher = new Pusher('040beb8e47f7cd255c5b', {
        //     cluster: 'us2',
        //     forceTLS: true
        // });
        // const channel = pusher.subscribe(`p-channel-${this.state.uuid}`);
        // channel.bind('broadcast', response => {
        //     this.streamPusherMessage(response.message);
        // })
    }


    render() {
        console.log(this.props)
        return (
            <div>
                <Room room={this.room} description={this.description} />
                <Chat messages={this.messages} />
                <MoveCommands
                    updateMsg={this.updateMessages}
                    moveRooms={this.moveRooms} />
            </div>
        )
    }
}
//where do I update state. Should I split state between adventure and move adv?
//see MoveCommands and Chat
function mapStateToProps(state) {
    return {
        errorMessage: state.adventureReducer.error,
        message: state.chatReducer.message,
        room: state.adventureReducer.room,
        uuid: state.chatReducer.uuid,
        name: state.chatReducer.name,
        description: state.adventureReducer.description,
        players: state.adventureReducer.players,
    };
}

export default connect(mapStateToProps, { createAdventure })(Adventure);