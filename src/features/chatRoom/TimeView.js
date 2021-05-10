import React from "react";

/**
 *
 * @param {Date} datetime
 * @returns
 */
export default function TimeView({ datetime }) {
  return (
    <time className="TimeView">
      {`${datetime.toLocaleString("en", {
        hour: "2-digit",
        minute: "2-digit",
      })}`}
    </time>
  );
}
