import React from 'react';
import addChatImg from '../../assets/addChat.png';
import searchImg from '../../assets/search.png';

export default function Chat() {
  return (
    <section className="ContentRoot">
      <header className="ContentHeader">
        <div className="TabName">Chats</div>
        <img id="addChat" height="70%" src={addChatImg} alt=""/>
      </header>
      <div className="ContentSearchBar">
        <div className="SearchFriendsWrapper">
          <img id="search" height="80%" src={searchImg} alt=""/>
          <input className="SearchFriends" placeholder="Search chatrooms, participants" />
        </div>
      </div>
    </section>
  )
}
