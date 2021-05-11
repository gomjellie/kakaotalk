import React, { useCallback } from "react";

import bellImg from "assets/bell.png";
import etcImg from "assets/etc.png";
import settingImg from "assets/setting.png";
import chatImg from "assets/chat.png";
import userImg from "assets/user.png";

import { useHistory } from "react-router-dom";

interface Props {
  path: string;
}

const Sidebar: React.FC<Props> = ({ path }) => {
  const history = useHistory();

  const pushFactory = useCallback(
    (tab) => {
      return () => {
        history.push(`/${tab}`);
      };
    },
    [history]
  );

  return (
    <aside className="Sidebar">
      <img
        className={path === "/friend" ? "highlight" : ""}
        width="33%"
        id="personal"
        src={userImg}
        onClick={pushFactory("friend")}
        alt=""
      />
      <img
        className={path === "/chat" ? "highlight" : ""}
        width="33%"
        id="chat"
        src={chatImg}
        onClick={pushFactory("chat")}
        alt=""
      />
      <img
        className={path === "/more" ? "highlight" : ""}
        width="30%"
        id="etc"
        src={etcImg}
        onClick={pushFactory("more")}
        alt=""
      />
      <img width="25%" id="bell" src={bellImg} alt="" />
      <img width="25%" id="setting" src={settingImg} alt="" />
    </aside>
  );
};

export default Sidebar;
