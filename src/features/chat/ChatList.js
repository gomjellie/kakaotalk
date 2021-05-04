import React from 'react';
import ChatItem from './ChatItem';
import duhanJpeg from '../../assets/duhan.jpeg';
import kakaoPayImg from '../../assets/kakaopay.png';
import raloImg from '../../assets/ralo.png';
import pepeGif from '../../assets/pepe.gif';

export default function ChatList() {

  return (
    <div className="ChatList">
      <ChatItem
        title="김두한"
        avatar={duhanJpeg}
        message="4 딸라...!"
      />
      <ChatItem
        title="[공고3]SW 개발자 취업&이직 공고방"
        message="안녕하세요! :D\n 공지사항 필독 부탁드립니다!\n\n #공지사항 미준수 시 강퇴 #"
      />
      <ChatItem
        title="카카오페이"
        avatar={kakaoPayImg}
        message="[결제] 알 리워드가 도착했습니다.\n\n도착한 결제 알 리워드는 아래 [받기] 버튼을 누르시면"
      />
      <ChatItem
        title="호찬김"
        avatar={raloImg}
        message="그러니까 내가..\n누군가를 이제 좋아한다 사실이\n그 사람에게는 상처가 될 수도 있잖아요.."
      />
      <ChatItem
        title="페페"
        avatar={pepeGif}
        message="Photo"
      />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
    </div>
  )
}
