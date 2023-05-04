import React, { useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  UserCredential,
} from "firebase/auth";
import { auth } from "./firebase";
import * as S from "./style";

function App() {
  const [name, setName] = useState<string | null>();
  const [email, setEmail] = useState<string | null>();
  const [image, setImage] = useState<string | null>();

  const onClick = () => {
    const provider = new GoogleAuthProvider();
    provider.addScope("profile");
    provider.addScope("email");

    signInWithPopup(auth, provider)
      .then((result) => {
        const user: UserCredential["user"] = result.user;
        setName(user.displayName);
        setEmail(user.email);
        setImage(user.photoURL);
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  return (
    <>
      <S.App>
        {!image && (
          <>
            <h1>Sign in with Google 🔥</h1>{" "}
            <S.SignInButton onClick={onClick}>
              Sign in with Google
            </S.SignInButton>
          </>
        )}
        {image && (
          <>
            <S.Profile url={image} />
            <S.Text style={{ marginTop: 40 }}>{name}</S.Text>
            <S.Text style={{ marginTop: 20 }}>{email}</S.Text>
          </>
        )}
      </S.App>
    </>
  );
}

export default App;
