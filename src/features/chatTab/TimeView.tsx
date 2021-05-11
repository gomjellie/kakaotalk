import React from "react";

interface Props {
  datetime: string | Date;
}

const TimeView: React.FC<Props> = ({ datetime }) => {
  const now = new Date();

  if (typeof datetime === "string") {
    datetime = new Date(datetime.replace(/-/g, "/"));
  }

  const diff = now.getTime() - datetime.getTime();
  const diffTime = diff / (1000 * 60 * 60);

  if (diffTime < 24) {
    return (
      <time className="CurrentTime">
        {`${datetime.toLocaleString("en", {
          hour: "2-digit",
          minute: "2-digit",
        })}`}
      </time>
    );
  }
  if (diffTime < 48) {
    return <time className="CurrentTime">Yesterday</time>;
  }
  return (
    <time className="CurrentTime">
      {`${datetime.toLocaleString("us", { month: "long", day: "numeric" })}`}
    </time>
  );
};

export default TimeView;
