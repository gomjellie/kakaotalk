import React from "react";

/**
 * May 10, 2021 같은 형식으로 날짜 구분선을 표시한다.
 * @param {Date} date
 * @returns
 */
export default function TimeDivider({ date }) {
  return (
    <div className="TimeDivider">
      <div />
      <time>
        {date.toLocaleString("en", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      </time>
      <div />
    </div>
    
  );
}
