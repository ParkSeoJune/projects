import React, { useEffect, useState } from "react";
import * as S from "./style";
import { uid } from "uid";
import { db } from "./firebase";
import { useLocation } from "react-router-dom";
import { child, get, ref, set } from "firebase/database";

interface ChatType {
  user: {
    first: {
      email: string;
      name: string;
      profileImageUrl: string;
      uid: string;
    };
  };
}

function Chatting() {
  const location = useLocation();
  const [userId, setUserId] = useState<string>("");
  const [chat, setChat] = useState<string[]>([]);

  const createChat = () => {
    const uuid = uid();
    const user = "user";

    set(ref(db, `chattings/${uuid}/${user}/` + "first"), {
      email: location.state.email,
      name: location.state.name,
      profileImageUrl: location.state.profile,
      uid: userId,
    });
  };

  const joinChat = (uid: string) => {
    const dbRef = ref(db);

    get(child(dbRef, uid))
      .then((snapshot) => {
        if (snapshot.exists()) {
          if (uid === "/chattings") {
            setChat(Object.keys(snapshot.val()));
          } else {
            const response: ChatType = snapshot.val();
            if (response.user.first.uid !== userId) {
              console.log("채팅방 이동");
            }
          }
        } else {
          console.log("채팅방이 없어요");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //참가 누르면 그 채팅방의 uid를 가져오고 채팅방안에 있는 유저 uid와 자신의 uid를 비교

  useEffect(() => {
    setUserId(location.state.uid);
  });

  return (
    <>
      <S.App>
        <>
          <h1>Video Chat 🔥</h1>
          <S.CreateButton onClick={createChat}>create</S.CreateButton>
          <S.EnterButton onClick={() => joinChat("/chattings")}>
            join in
          </S.EnterButton>
          {chat &&
            chat.map((props, idx) => (
              <button key={idx} onClick={() => joinChat(`/chattings/${props}`)}>
                {props}
              </button>
            ))}
        </>
      </S.App>
    </>
  );
}

export default Chatting;
