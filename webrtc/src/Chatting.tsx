import React, { useEffect, useState } from "react";
import * as S from "./style";
import { uid } from "uid";
import { db } from "./firebase";
import { useLocation } from "react-router-dom";
import { ref, set } from "firebase/database";

function Chatting() {
  const location = useLocation();
  const [userId, setUserId] = useState<string>("");

  const createChat = () => {
    const uuid = uid();
    const user = "user";

    set(ref(db, `chattings/${uuid}/${user}/` + userId), {
      email: location.state.email,
      name: location.state.name,
      profileImageUrl: location.state.profile,
      uid: userId,
    });
  };

  useEffect(() => {
    setUserId(location.state.uid);
  });

  return (
    <>
      <S.App>
        <>
          <h1>Video Chat 🔥</h1>
          <S.CreateButton onClick={createChat}>create</S.CreateButton>
          <S.EnterButton>join in</S.EnterButton>
        </>
      </S.App>
    </>
  );
}

export default Chatting;
