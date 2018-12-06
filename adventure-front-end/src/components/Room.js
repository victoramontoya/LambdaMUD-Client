import React from 'react';


const Room = props => {
    return (
        <div className="Info" id="room">
            <h2 >{props.title}</h2>
            <h3 >{props.description}</h3>
        </div>
    )
}

export default Room;