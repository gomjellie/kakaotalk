import React from 'react';
import addFriend from '../../assets/addFriend.png';

export default function Friend() {
  return (
    <section className="ContentRoot">
      <header className="ContentHeader">
        <h4 className="TabName">Friends</h4>
        <img id="addFriend" height="65%" src={addFriend} alt=""/>
        
      </header>
      <div className="ContentSearchBar">

      </div>
      <main>

      </main>
    </section>
  )
}
