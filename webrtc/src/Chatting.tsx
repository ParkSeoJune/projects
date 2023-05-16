import React, { useEffect, useState } from "react";
import * as S from "./style";
import { uid } from "uid";
import { db } from "./firebase";
import { useLocation, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const location = useLocation();
  const [userId, setUserId] = useState<string>("");
  const [chat, setChat] = useState<string[]>([]);

  const createChat = () => {
    const uuid = uid();

    set(ref(db, `chattings/${uuid}/user/` + "first"), {
      name: location.state.name,
      profileImageUrl: location.state.profile,
      uid: userId,
      user1: true,
    });

    navigate(`/chattings/${uuid}`);
  };

  const joinChat = (uid: string, uuid: string) => {
    const dbRef = ref(db);

    get(child(dbRef, uid))
      .then((snapshot) => {
        if (snapshot.exists()) {
          if (uid === "/chattings") {
            setChat(Object.keys(snapshot.val()));
          } else {
            const response: ChatType = snapshot.val();
            if (response.user.first.uid !== userId) {
              set(ref(db, `chattings/${uuid}/user/` + "second"), {
                name: location.state.name,
                profileImageUrl: location.state.profile,
                uid: userId,
                user1: false,
              });
              navigate(`/chattings/${uuid}`);
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

  useEffect(() => {
    setUserId(location.state.uid);
  });

  return (
    <>
      <S.App>
        <>
          <S.Profile url={location.state.profile} />
          <h1>화상채팅을 이용해 봐요! 🔥</h1>
          <S.CreateButton onClick={createChat}>create</S.CreateButton>
          <S.EnterButton onClick={() => joinChat("/chattings", "")}>
            join in
          </S.EnterButton>
          {chat &&
            chat.map((props, idx) => (
              <button
                key={idx}
                onClick={() => joinChat(`/chattings/${props}`, props)}
              >
                {props}
              </button>
            ))}
        </>
      </S.App>
    </>
  );
}

export default Chatting;
