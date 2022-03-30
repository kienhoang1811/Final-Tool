import React from 'react';
import PropTypes from 'prop-types';
import "./event.css";
import saleof1 from "./img/saleof1.jpg";
import saleof2 from "./img/anhgiamgia2.jpg";
import saleof3 from "./img/anhgiamgia3.jpg";
Event.propTypes = {
    
};

function Event(props) {
    return (
        <div className="container-event"id="container-event" >
            <div className="event">
                <div className="event-label">Sự kiện</div>
                <div className="saleof">
                <img className="saleof1" src={saleof1} alt="" />
                </div>
                <div className="saleof"><img className="saleof1" src={saleof2} alt="" /></div>
                <div className="saleof"><img className="saleof1" src={saleof3} alt="" /></div>
            </div>
            
        </div>
    );
}

export default Event;