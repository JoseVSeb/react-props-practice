import React from "react";
import Avatar from "./Avatar";
import Info from "./Info";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        {/* <Info text={props.id} /> */}
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.imgURL} />
      </div>
      <div className="bottom">
        <Info text={props.phone} />
        <Info text={props.email} />
      </div>
    </div>
  );
}

export default Card;
