import React from 'react';
import moment from "moment-timezone";

const City = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "17%",
      }}
    >
      <h4 style={{
        fontWeight: 100,
        fontSize: "2rem",
        margin: 0,
        padding: 0,
      }}>
        {moment.tz(Date.now(), props.tz).format('MM/DD/YYYY')}
      </h4>
      <h4 style={{
        fontWeight: 100,
        fontSize: "4rem",
        margin: 0,
        padding: 0,
      }}>
        {moment.tz(Date.now(), props.tz).format('hh:mmA')}
      </h4>
    </div>
  )
}

export default City;
