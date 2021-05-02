import React from 'react';
import addFriendImg from '../../assets/addFriend.png';
import searchImg from '../../assets/search.png';

export default function Friend() {
  return (
    <section className="ContentRoot">
      <header className="ContentHeader">
        <h4 className="TabName">Friends</h4>
        <img id="addFriend" height="65%" src={addFriendImg} alt=""/>
        
      </header>
      <div className="ContentSearchBar">
        <div class="SearchFriendsWrapper">
          <img id="search" height="75%" src={searchImg} alt=""/>
          <input className="SearchFriends" placeholder="Search Friends" />
        </div>
      </div>
      <main>

      </main>
    </section>
  )
}
