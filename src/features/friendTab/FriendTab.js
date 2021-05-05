import React from 'react';
import addFriendImg from '../../assets/addFriend.png';
import searchImg from '../../assets/search.png';
import birthdayImg from '../../assets/birthday.png';
import ChannelItem from './ChannelItem';
import Divider from './Divider';
import SectionTitle from './SectionTitle';
import UserItem from './UserItem';
import raloImg from '../../assets/ralo.png';

export default function Friend() {
  const user = {
    nickname: "저스틴 비버",
    stat: "and i feel so holly holly",
    music: "Justin Bieber- Baby",
  };

  return (
    <section className="FriendTabContainer">
      <header className="FriendTabHeader">
        <div className="HeaderTitle">Friends</div>
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
        <UserItem avatar={raloImg} nickname="김찬호" stat="남탓금지, 나를믿고 팀을믿자" music="Can't beat airman"/>
        <Divider />
        <SectionTitle title="Friends with Birthdays"/>
        <UserItem nickname={user.nickname} music={user.music}/>
        <ChannelItem icon={birthdayImg} name="View more birthdays" numItem={16}/>
        <Divider />
        <SectionTitle title="Channel"/>
        <ChannelItem name="Channel" numItem={10}/>
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
