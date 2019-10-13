import React from 'react';
import moment from "moment-timezone";

const City = (props) => {
  return (
    <div className="clock-wrapper">
      <h4 className="year">
        {moment.tz(Date.now(), props.tz).format('MM/DD/YYYY')}
      </h4>
      <h4 className="time">
        {moment.tz(Date.now(), props.tz).format('hh:mmA')}
      </h4>
    </div>
  )
}

export default City;
