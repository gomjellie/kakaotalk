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

import TimeDivider from "./TimeDivider";
import TimeView from "./TimeView";

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
              <input type="range" className="TransparencyController"></input>
            </div>
            <div className="RoomControllerButtons">
              <img src={SearchImg} alt="" className="RoomControllerButton" />
              <img src={BellImg} alt="" className="RoomControllerButton" />
              <img
                src={TalkDriveIcon}
                alt=""
                className="RoomControllerButton"
              />
              <img
                src={HamburgerMenuIcon}
                alt=""
                className="RoomControllerButton"
              />
            </div>
          </div>
        </div>
      </header>
      <main className="Chats">
        <div className="Chatter">
          <img src={DefaultProfileImg} alt="" />
          <div className="ChatterName">일론머스크</div>
        </div>
        <div className="BubbleWrapper Left First">
          <div className="Bubble">아</div>
          <div className="RightInfos">
            <TimeView datetime={new Date()} />
          </div>
        </div>
        <div className="BubbleWrapper Right First">
          <div className="LeftInfos">
            <TimeView datetime={new Date()} />
          </div>
          <div className="Bubble">아</div>
        </div>
        <div className="Chatter">
          <img src={DefaultProfileImg} alt="" />
          <div className="ChatterName">일론머스크</div>
        </div>
        <div className="BubbleWrapper Left First">
          <div className="Bubble">
            가나다라마바사아자차카타파하가나다라마바사아자차카타파하
          </div>
          <div className="RightInfos">
            <TimeView datetime={new Date()} />
          </div>
        </div>
        <div className="BubbleWrapper Right First">
          <div className="LeftInfos">
            <TimeView datetime={new Date()} />
          </div>
          <div className="Bubble">
            가나다라마바사아자차카타파하가나다라마바사아자차카타파하
          </div>
        </div>
        <TimeDivider date={new Date()} />
        <div className="Chatter">
          <img src={DefaultProfileImg} alt="" />
          <div className="ChatterName">일론머스크</div>
        </div>
        <div className="BubbleWrapper Left First">
          <div className="Bubble">뭐하냐</div>
          <div className="RightInfos">
            <TimeView datetime={new Date()} />
          </div>
        </div>
        <div className="BubbleWrapper Right First">
          <div className="LeftInfos">
            <TimeView datetime={new Date()} />
          </div>
          <div className="Bubble">뭐</div>
        </div>
        <div className="Chatter">
          <img src={DefaultProfileImg} alt="" />
          <div className="ChatterName">일론머스크</div>
        </div>
        <div className="BubbleWrapper Left First">
          <div className="Bubble">아니 뭐</div>
          <div className="RightInfos">
            <div className="Unreads">1</div>
            <TimeView datetime={new Date()} />
          </div>
        </div>
        <div className="BubbleWrapper Right First">
          <div className="LeftInfos">
            <div className="Unreads">1</div>
            <TimeView datetime={new Date()} />
          </div>
          <div className="Bubble">
            가나다라마바사아자차카타파하가나다라마바사아자차카타파하
          </div>
        </div>
        <div className="Chatter">
          <img src={DefaultProfileImg} alt="" />
          <div className="ChatterName">일론머스크</div>
        </div>
        <div className="BubbleWrapper Left First">
          <div className="Bubble">
            가나 다라마바사아자
            차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타파하
          </div>
          <div className="RightInfos">
            <div className="Unreads">1</div>
          </div>
        </div>
        <div className="BubbleWrapper Left">
          <div className="Bubble">
            가나다라마바사아자차 카타파하가나다라마바사아자차카타파하
          </div>
          <div className="RightInfos">
            <div className="Unreads">1</div>
            <TimeView datetime={new Date()} />
          </div>
        </div>
        <div className="BubbleWrapper Right First">
          <div className="LeftInfos">
            <div className="Unreads">1</div>
            <TimeView datetime={new Date()} />
          </div>
          <div className="Bubble">ㄹㅇㅋㅋ</div>
        </div>
      </main>
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
