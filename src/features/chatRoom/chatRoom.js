import React from "react";

export default function ChatRoom({ match }) {
  // const { id } = match.params;

  return (
    <section className="ChatRoomContainer">
      <header className="Header">
        <div className="Title">ChatRoom</div>
      </header>
      <main>
        
      </main>
      <div className="InputTools">

      </div>
      <div className="Input">
        <textarea className="TextInput" spellcheck="false">

        </textarea>
        <div className="SendButton">
          Send
        </div>
      </div>
    </section>
  );
}
