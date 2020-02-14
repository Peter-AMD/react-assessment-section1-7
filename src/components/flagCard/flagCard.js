import React from 'react';
import './flagCard.css';
import UserDetail from '../userDetail/userDetail';

const FlagCard = props => {
  const { user } = props;
  return (
    <div className="flagcard-wrapper">
      <UserDetail email={user.email} avatar={user.avatar} jobTitle={user.jobTitle} />
      <div className="flag-description">
        <img alt="flag" src={`https://www.countryflags.io/${user.countryCode}/flat/64.png`}></img>
        <p>{user.content}</p>
      </div>
    </div>
  );
}

export default FlagCard;