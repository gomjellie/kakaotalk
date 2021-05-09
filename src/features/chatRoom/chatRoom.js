import React from "react";
import EmoticonIcon from "assets/icons/EmoticonFace.png";
import PaperClipIcon from "assets/icons/PaperClip.png";
import CalendarCheckIcon from "assets/icons/CalendarCheck.png";
import PhoneCallIcon from "assets/icons/PhoneCall.png";
import VideoCallIcon from "assets/icons/VideoCall.png";

export default function ChatRoom({ match }) {
  // const { id } = match.params;

  return (
    <section className="ChatRoomContainer">
      <header className="Header">
        <div className="Title">ChatRoom</div>
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
        <textarea className="TextInput" spellcheck="false"></textarea>
        <div className="SendButton">Send</div>
      </div>
    </section>
  );
}
