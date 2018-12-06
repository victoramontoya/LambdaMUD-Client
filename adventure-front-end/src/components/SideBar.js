// import React, {Component} from 'react'
// import { Link } from 'react-router-dom'
// import { Button } from 'reactstrap';
// // import Chat from './chat/Chat'
// import { connect } from 'react-redux';
// import { createChat} from '../actions';


// class SideBar extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             chat: []
//         }
//     };



// handleChat = e => {
//     e.preventDefault();
//     console.log(this.state);
//     this.props.startChat(this.state);
// }

// render() {
//     return (
//     <div>
//         <h2>Adventure Chat</h2>

//         <Chat chat={this.state.chat} />
//         <Button onClick={this.props.handleChat} >
//                 Start Chat
//             </Button>
//     </div>
//     )

// }
// };
    

// export default connect(null, { createChat })(SideBar);
