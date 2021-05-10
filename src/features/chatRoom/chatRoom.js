import React from "react";
import EmoticonIcon from "assets/icons/EmoticonFace.png";
import PaperClipIcon from "assets/icons/PaperClip.png";
import CalendarCheckIcon from "assets/icons/CalendarCheck.png";
import PhoneCallIcon from "assets/icons/PhoneCall.png";
import VideoCallIcon from "assets/icons/VideoCall.png";
import DefaultProfileImg from "assets/defaultProfile.png";
import UserImg from "assets/user.png";
import SearchImg from "assets/search.png";
import BellImg from "assets/bell.png";
import TalkDriveIcon from "assets/icons/TalkDrive.png";
import HamburgerMenuIcon from "assets/icons/HamburgerMenu.png";

export default function ChatRoom({ match }) {
  const { id } = match.params;

  return (
    <section className="ChatRoomContainer">
      <header className="Header">
        <div className="HeaderRow">
          <div className="AvatarWrapper">
            <img src={DefaultProfileImg} alt="" />
          </div>
          <div className="RoomInfoWrapper">
            <div className="RoomName">{id}</div>
            <div className="Dummy" />
            <div className="RoomMembers">
              <img src={UserImg} alt="" />2
            </div>
          </div>
          <div className="RoomControllerWrapper">
            <div className="TransparencyControllerWrapper">
              <input type="range" className="TransparencyController">
                
              </input>
            </div>
            <div className="RoomControllerButtons">
              <img src={SearchImg} alt="" className="RoomControllerButton" />
              <img src={BellImg} alt="" className="RoomControllerButton" />
              <img src={TalkDriveIcon} alt="" className="RoomControllerButton" />
              <img src={HamburgerMenuIcon} alt="" className="RoomControllerButton" />
            </div>
          </div>
        </div>
      </header>
      <main></main>
      <div className="InputTools">
        <img src={EmoticonIcon} alt="" />
        <img src={PaperClipIcon} alt="" />
        <img src={CalendarCheckIcon} alt="" />
        <div className="ThisIsEmpty"></div>
        <img src={PhoneCallIcon} alt="" />
        <img src={VideoCallIcon} alt="" />
      </div>
      <div className="Input">
        <textarea className="TextInput" spellCheck="false"></textarea>
        <div className="SendButton">Send</div>
      </div>
    </section>
  );
}