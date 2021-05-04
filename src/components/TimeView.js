import React from 'react';

export default function TimeView({datetime, className}) {
  const now = new Date();

  if (typeof(datetime) === 'string') {
    datetime = new Date(datetime);
  }

  const diff = now - datetime;
  const diffTime = diff / (1000 * 60 * 60);

  if (diffTime < 24) {
    return (
      <time className={className}>
        {`${datetime.toLocaleString('en', {hour: '2-digit', minute: '2-digit'})}` }
      </time>
    )
  }
  if (diffTime < 48) {
    return (
      <time className={className}>
        Yesterday
      </time>
    )
  }
  return (
    <time className={className}>
      {`${datetime.toLocaleString('us', {month: 'long', day: 'numeric'})}`}
    </time>
  )
}
