import React from "react";
import addFriendImg from "assets/addFriend.png";
import searchImg from "assets/search.png";
import birthdayImg from "assets/birthday.png";
import ChannelItem from "./ChannelItem";
import Divider from "./Divider";
import SectionTitle from "./SectionTitle";
import UserItem from "./UserItem";
import raloImg from "assets/ralo.png";
import bieberImg from "assets/bieber.jpg";
// import chanoImg from "assets/chano.png";
// import duhanImg from "assets/duhan.jpeg";
// import umImg from "assets/um.jpeg";
// import pakaImg from "assets/paka.jpeg";
// import jihwanImg from "assets/jihwan.jpeg";
import Sidebar from "components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { selectUsers, onClickUser } from "./friendTabSlice";

export default function Friend() {
  const defaultUser = {
    nickname: "저스틴 비버",
    stat: "and i feel so holly holly",
    music: "Justin Bieber- Baby",
  };
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  return (
    <>
      <Sidebar path="/friend" />
      <section className="FriendTabContainer">
        <header className="FriendTabHeader">
          <div className="HeaderTitle">Friends</div>
          <img id="addFriend" height="65%" src={addFriendImg} alt="" />
        </header>
        <div className="ContentSearchBar">
          <div className="SearchFriendsWrapper">
            <img id="search" height="80%" src={searchImg} alt="" />
            <input className="SearchFriends" placeholder="Search Friends" />
          </div>
        </div>
        <main className="Main">
          <SectionTitle title="My Default Profile" />
          <UserItem
            user={{
              avatar: raloImg,
              nickname: "김찬호",
              stat: "남탓금지, 나를믿고 팀을믿자",
              music: "Can't beat airman",
            }}
          />
          <Divider />
          <SectionTitle title="Friends with Birthdays" />
          <UserItem
            user={{
              avatar: bieberImg,
              nickname: defaultUser.nickname,
              music: defaultUser.music,
            }}
          />
          <ChannelItem
            icon={birthdayImg}
            name="View more birthdays"
            numItem={16}
          />
          <Divider />
          <SectionTitle title="Channel" />
          <ChannelItem name="Channel" numItem={10} />
          <Divider />
          <SectionTitle title="Friends 389" />
          {users.map((user, idx) => {
            const prefix = "friend_tab_key";
            return (
              <UserItem
                key={`${prefix}:${user.nickname}${idx}`}
                // avatar={user.avatar}
                // nickname={user.nickname}
                // stat={user.stat}
                // music={user.music}
                user={user}
                onClick={() => {
                  dispatch(onClickUser({ nickname: user.nickname }));
                }}
              />
            );
          })}
          {/* <UserItem
            avatar={chanoImg}
            nickname="랄로"
            stat="그렇게 됐습니다..."
            music="おおつか あい-さくらんぼ"
          />
          <UserItem avatar={duhanImg} nickname="김두한" stat="4 딸라!" />
          <UserItem nickname="정상길" stat="" music="" />
          <UserItem
            nickname="장지환"
            stat="ㅅㅍㅌㄴㄲ"
            avatar={jihwanImg}
            music="Panic! At The Disco - I Write Sins Not Tragedies"
          />
          <UserItem nickname="손인욱" avatar={pakaImg} music="" />
          <UserItem
            nickname="엄준식"
            avatar={umImg}
            stat="Lorem Ipsum Lorem IpsumLorem Ipsum Lorem IpsumLorem Ipsum Lorem IpsumLorem Ipsum Lorem IpsumLorem Ipsum Lorem IpsumLorem Ipsum Lorem Ipsum"
          />
          <UserItem nickname="굄우지" />
          <UserItem nickname="." stat="asdf" />
          <UserItem
            nickname="페페"
            music="Fear and Loathing in the lasvegas - Jump Around"
          />
          <UserItem
            nickname={user.nickname}
            stat={user.stat}
            music={user.music}
          />
          <UserItem
            nickname={user.nickname}
            stat={user.stat}
            music={user.music}
          />
          <UserItem
            nickname={user.nickname}
            stat={user.stat}
            music={user.music}
          /> */}
        </main>
      </section>
    </>
  );
}
