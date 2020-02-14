import React from 'react';
import './userDetail.css';
import avatarPlaceholder from './assets/placeholder-avatar.jpg';

const UserDetail = (props) => { //email, image, jobTitle
  return (
    <div className="userdetail-wrapper">
      <div className="email-jobtitle">
        <p className="email">{props.email}</p>
        <p className="jobtitle">{props.jobTitle}</p>
      </div>
      <div className="avatar">
        <img className="placeholder-avatar" alt="no-avatar" src={avatarPlaceholder}></img>
        <img className="main-avatar" alt="avatar" src={props.avatar}></img>
      </div>
    </div>
  )
}

export default UserDetail;