import { useLocation } from "react-router-dom";
import { App } from "../style";
import * as S from "./style";
import { useEffect, useState } from "react";
import { child, get, ref } from "firebase/database";
import { db } from "../firebase";

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
    const dbRef = ref(db);

    get(child(dbRef, location.pathname + "/user/first"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setUser1(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
    get(child(dbRef, location.pathname + "/user/second"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setUser2(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <App>
        <S.Frame>
          <S.Top>
            <S.User>
              <S.Profile src={user1?.profileImageUrl} />
              <S.UserName>{user1?.name}</S.UserName>
            </S.User>
            <S.User>
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
