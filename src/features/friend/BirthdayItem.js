import React from 'react';
import cakeImg from '../../assets/birthday-cake.png';

export default function BirthdayItem({numBirthday}) {
  return (
    <div className="BirthdayItem">
      <div className="AvatarWrapper">
        <img className="Avatar" src={cakeImg} alt=""></img>
      </div>
      
      <div className="Texts">View more birthdays <div className="NumBirthday">{numBirthday}</div></div>
    </div>
  )
}
