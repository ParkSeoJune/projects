import React from "react";
import * as S from "./style";
import { auth } from "./firebase";
import {
  GoogleAuthProvider,
  UserCredential,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();

  const onClick = () => {
    const provider = new GoogleAuthProvider();
    provider.addScope("profile");
    provider.addScope("email");

    signInWithPopup(auth, provider)
      .then((result) => {
        const user: UserCredential["user"] = result.user;

        auth.onAuthStateChanged((user) => {
          if (user) {
            navigate("/chatting", {
              state: {
                uid: user.uid,
                email: user.email,
                name: user.displayName,
                profile: user.photoURL,
              },
            });
          }
        });
      })
      .catch((error: any) => {
        Error(error);
      });
  };

  return (
    <>
      <S.App>
        <>
          <h1>Sign in with Google 🔥</h1>
          <S.SignInButton onClick={onClick}>Sign in with Google</S.SignInButton>
        </>
      </S.App>
    </>
  );
}

export default SignIn;
