import React from "react";

const UserCard = props => {
  return (
    <div className="card" style={{ marginTop: "70px" }}>
      <div className="ui card" id="card">
        <div className="image">
          <img src={props.userdata.image} />
        </div>
        <div className="content">
          <a className="header">{props.userdata.name}</a>
          <div className="meta">
            <i class="user icon"></i>
            <span className="location">{props.userdata.username}</span>
          </div>
          <div className="description">
            <i className="home icon"></i>
            {props.userdata.location}
          </div>
        </div>
        <div className="extra content">
          <a>
            <i className="users icon"></i>
            {props.userdata.followers}
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
