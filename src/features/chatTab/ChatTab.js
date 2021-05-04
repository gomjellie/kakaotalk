import React from 'react';
import addChatImg from '../../assets/addChat.png';
import searchImg from '../../assets/search.png';
import ChatRoomList from './ChatRoomList';

export default function ChatTab() {
  return (
    <section className="ChatTabContainer">
      <header className="ChatTabHeader">
        <div className="HeaderTitle">Chats</div>
        <img id="addChat" height="70%" src={addChatImg} alt=""/>
      </header>
      <div className="ChatSearchBar">
        <div className="SearchFriendsWrapper">
          <img id="search" height="80%" src={searchImg} alt=""/>
          <input className="SearchFriends" placeholder="Search chatrooms, participants" />
        </div>
      </div>
      <main className="Chat">
        <ChatRoomList />
      </main>
    </section>
  )
}
