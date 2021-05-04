import React from 'react';
import addChatImg from '../../assets/addChat.png';
import searchImg from '../../assets/search.png';
import ChatList from './ChatList';

export default function Chat() {
  return (
    <section className="ChatContainer">
      <header className="ChatHeader">
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
        <ChatList />
      </main>
    </section>
  )
}
