// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component {

    clickedCoordinatesButtonEvent = (event) => {
        let array = [event.clientX, event.clientX]

        this.props.onReceiveCoordinates(array)
    }

    render () {
        
        return (
            <button onClick = { this.clickedCoordinatesButtonEvent } >Coordinates</button>
        )
    }
}