import { useLocation } from "react-router-dom";
import { App } from "../style";
import * as S from "./style";
import { useEffect, useState } from "react";

interface UserType {
  name: string;
  profileImageUrl: string;
  uid: string;
  user1: boolean;
}

function ChatRoom() {
  const location = useLocation();
  const [user1, setUser1] = useState<UserType>();
  const [user2, setUser2] = useState<UserType>();

  useEffect(() => {
    if (location.state.user1) {
      setUser1(location.state);
    } else {
      setUser2(location.state);
    }

    const me = new Remon({
      config: createConfig({ local: "#myVideo" }),
      listener: createListener(),
    });
    me.createRoom(roomName);
  }, []);

  return (
    <>
      <App>
        <S.Frame>
          <S.Top>
            <S.User>
              <S.Profile src={user1?.profileImageUrl} />
              <S.UserName>{user1?.name}</S.UserName>
              <S.Profile src={user2?.profileImageUrl} />
              <S.UserName>{user2?.name}</S.UserName>
            </S.User>
          </S.Top>
          <S.ChatFrame>
            <S.Face />
            <S.Face />
          </S.ChatFrame>
          <S.Disconnect>통화 종료</S.Disconnect>
        </S.Frame>
      </App>
    </>
  );
}

export default ChatRoom;
