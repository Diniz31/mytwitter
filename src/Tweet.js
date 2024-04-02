import React from "react";
import './App.css';

function Tweet(props){ // or use { name, message } instead of props
    return(
        <div className="tweet">
            <h3>{props.name}</h3>
            <p>{props.message}</p>
            <h3>Number of Likes</h3>
        </div>
    )
}
export default Tweet;