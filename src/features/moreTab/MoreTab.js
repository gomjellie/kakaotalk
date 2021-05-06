import React from 'react';

import ProtectIcon from 'assets/icons/Protect.png';
import BTIcon from 'assets/icons/BiggerThan.png';
import MailIcon from 'assets/icons/Mail.png';
import CalendarIcon from 'assets/icons/Calendar.png';
import TalkDriveIcon from 'assets/icons/TalkDrive.png';
import EmoticonIcon from 'assets/icons/Emoticon.png';
import TVIcon from 'assets/icons/TV.png';
import GiftIcon from 'assets/icons/Gift.png';
import NoticesIcon from 'assets/icons/Notices.png';
import KakaoLabIcon from 'assets/icons/KakaoLab.png';
import SettingsIcon from 'assets/icons/Settings.png';
import HelpIcon from 'assets/icons/Help.png';
import InfoIcon from 'assets/icons/Info.png';

export default function More() {

  return (
    <section className="MoreTabContainer">
      <header className="MoreTabHeader">
        <div className="HeaderTitle">
          More
        </div>
      </header>
      <main>
        <div className="Wallet">
          <div className="Top">
            <div className="Left">
              <div className="Name">
                김찬호
              </div>
              <div className="Email">
                chanho@gmail.com
              </div>
            </div>
            <div className="ProtectIcon">
              <img height="auto" width="100%" src={ProtectIcon} alt="ProtectionIcon" />
            </div>
          </div>
          <div className="Subscription">
            <div className="Text">My Subscription</div>
            <div className="BTIcon">
              <img height="auto" src={BTIcon} alt="BTIcon" />
            </div>
          </div>
        </div>
        <div className="Icons">
          <div className="Icon">
            <img src={MailIcon} alt="" />
            <div className="Text">Mail</div>
          </div>
          <div className="Icon">
            <img src={CalendarIcon} alt="" />
            <div className="Text">Calendar</div>
          </div>
          <div className="Icon">
            <img src={TalkDriveIcon} alt="" />
            <div className="Text">Talk Drive</div>
          </div>
          <div className="Icon">
            <img src={EmoticonIcon} alt="" />
            <div className="Text">Emoticon</div>
          </div>
          <div className="Icon">
            <img src={TVIcon} alt="" />
            <div className="Text">TV</div>
          </div>
          <div className="Icon">
            <img src={GiftIcon} alt="" />
            <div className="Text">Gift</div>
          </div>
          <div className="Icon">
            <img src={NoticesIcon} alt="" />
            <div className="Text">Notices</div>
          </div>
          <div className="Icon">
            <img src={KakaoLabIcon} alt="" />
            <div className="Text">Kakao Lab</div>
          </div>
          <div className="Icon">
            <img src={SettingsIcon} alt="" />
            <div className="Text">Settings</div>
          </div>
          <div className="Icon">
            <img src={HelpIcon} alt="" />
            <div className="Text">Help</div>
          </div>
        </div>
        <div className="Divider" />
        <div className="VersionInfo">
          <div className="KakaoTalkInfo">
            <img src={InfoIcon} alt="Info" />
            KakaoTalk Info
          </div>
           <div className="Version">ver. 2.9.0</div>
        </div>
      </main>
    </section>
  )
}
