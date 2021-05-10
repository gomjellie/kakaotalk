import React from "react";

import { useHistory } from "react-router-dom";
import useConstructor from "hooks/useConstructor";

export default function Sidebar() {
  const history = useHistory();

  useConstructor(() => {
    if (window.isUsingSwitcher === true) return;
    window.isUsingSwitcher = true;
    window?.api?.receive("fromMain", (payload) => {
      console.log(payload);
      const { command } = payload;
      if (command === "switchTab") {
        history.push(`/${payload.goto}`);
      }
      else if (command === "openWindow" && payload.type === "chatRoom") {
        history.push(`/${payload.type}/${payload.roomName}`);
      }
    });
  });

  return <></>;
}
