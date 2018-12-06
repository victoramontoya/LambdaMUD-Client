
/// onclicks or on button push for game event listeners
/// render the game

import React, { Component } from 'react';
import { moveAdventure } from '../actions';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import Room from './Room';
import Chat from './Room';
import Pusher from 'pusher-js'
import { createChat } from '../actions';
import MoveCommands from './MoveCommands';




class Adventure extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // uuid: '',
            // name: '',
            // room: '',
            // description: '',
            // messages: [],
            // players: [],
            adventure: [],
            loggedin: true,
            token: localStorage.getItem("token"),
        }
    };

    componentDidMount() {
        const { token } = this.state;
        if (token === null) {
            this.setState({ loggedOn: false })
            return
        }
        Pusher.logToConsole = true;
        this.createAdventure(token)
        // this.loadGreetingMessage();
        const pusher = new Pusher('040beb8e47f7cd255c5b', {
            cluster: 'us2',
            forceTLS: true
        });
        const channel = pusher.subscribe(`p-channel-${this.state.uuid}`);
        channel.bind('broadcast', response => {
            this.streamPusherMessage(response.message);
        })
    }




    handleMove = (e) => {
        e.preventDefault();
        this.props.moveAdventure(this.state);
    };

    render() {
        return (
            <div>
                <Room room={this.room} description={this.description}/>
                <Chat messages={this.messages} />
                {/* <MoveCommands
                    updateMsg={this.updateMessages}
                    moveRooms={this.moveRooms}/> */}
            </div>
        )
    }
}
//where do I update state. Should I split state between adventure and move adv?
function mapStateToProps(state) {
    return {
        errorMessage: state.error,
        message: state.message,
        room: state.room,
        uuid: state.uuid,
        name: state.name,
        description: state.description,
        players: state.players,
    };
}


export default connect(mapStateToProps, { moveAdventure })(Adventure);