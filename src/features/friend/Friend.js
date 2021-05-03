import React from 'react';
import addFriendImg from '../../assets/addFriend.png';
import searchImg from '../../assets/search.png';
import BirthdayItem from './BirthdayItem';
import ChannelItem from './ChannelItem';
import Divider from './Divider';
import SectionTitle from './SectionTitle';
import UserItem from './UserItem';

export default function Friend() {
  const user = {
    nickname: "저스틴 비버",
    stat: "and i feel so holly holly",
    music: "Justin Bieber- Baby",
  };

  return (
    <section className="ContentRoot">
      <header className="ContentHeader">
        <div className="TabName">Friends</div>
        <img id="addFriend" height="65%" src={addFriendImg} alt=""/>
        
      </header>
      <div className="ContentSearchBar">
        <div className="SearchFriendsWrapper">
          <img id="search" height="80%" src={searchImg} alt=""/>
          <input className="SearchFriends" placeholder="Search Friends" />
        </div>
      </div>
      <main className="Main">
        <SectionTitle title="My Default Profile"/>
        <UserItem nickname={user.nickname} stat={user.stat} music={user.music}/>
        <Divider />
        <SectionTitle title="Friends with Birthdays"/>
        <UserItem nickname={user.nickname} music={user.music}/>
        <BirthdayItem numBirthday={16}/>
        <Divider />
        <SectionTitle title="Channel"/>
        <ChannelItem numChannel={10}/>
        <Divider />
        <SectionTitle title="Friends 389"/>
        <UserItem nickname={user.nickname} stat={user.stat} music="Justin Bieber - Lorem Ipsum Lorem Ipsum"/>
        <UserItem nickname={user.nickname} stat={user.stat}/>
        <UserItem nickname={user.nickname} stat={user.stat} music={user.music}/>
        <UserItem nickname={user.nickname} stat={user.stat} music={user.music}/>
        <UserItem nickname={user.nickname} stat={user.stat} music={user.music}/>
        <UserItem nickname={user.nickname} stat={user.stat} music={user.music}/>
        <UserItem nickname={user.nickname} stat={user.stat} music={user.music}/>
        <UserItem nickname={user.nickname} stat={user.stat} music={user.music}/>
        <UserItem nickname={user.nickname} stat={user.stat} music={user.music}/>
        <UserItem nickname={user.nickname} stat={user.stat} music={user.music}/>
        <UserItem nickname={user.nickname} stat={user.stat} music={user.music}/>
        <UserItem nickname={user.nickname} stat={user.stat} music={user.music}/>
      </main>
    </section>
  )
}
