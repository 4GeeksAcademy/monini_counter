import React from "react";
import "../styles/index.css";

function SimpleCounter({digitSix, digitFive, digitFour, digitThree, digitTwo, digitOne }) {
    return (
        <div className="bigCounter">
            <div className="calendar">
                <i className="far fa-clock"></i>
            </div>
            <div className="six">{digitSix % 10}</div>
            <div className="five">{digitFive % 10}</div>
            <div className="four">{digitFour % 10}</div>
            <div className="three">{digitThree % 10}</div>
            <div className="two">{digitTwo % 10}</div>
            <div className="one">{digitOne % 10}</div>
        </div>
    );
}

export default SimpleCounter;
