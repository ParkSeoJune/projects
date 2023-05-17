import { useLocation } from "react-router-dom";
import { App } from "../style";
import * as S from "./style";
import { useEffect, useState } from "react";
import { child, get, ref, set } from "firebase/database";
import { db } from "../firebase";
import Remon from "@remotemonster/sdk";

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
    let state: boolean = false;

    get(child(dbRef, location.pathname + "/user/first"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setUser1(snapshot.val());
          state = false;
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
          state = true;
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });

    if (!state) {
      // 채팅방을 생성했을 때
      const listener = {
        onCreate(channelId: any) {
          set(ref(db, `${location.pathname}/` + "channelId"), {
            channelId,
          });
        },
      };

      const me = new Remon({
        config: createConfig({ local: "#localVideo", remote: "#remoteVideo" }),
        listener: listener,
      });
      me.createCast();
    } else if (state) {
      console.log(location.state.channelId);
      const listener = {};

      const me = new Remon({
        config: createConfig({ local: "#localVideo", remote: "#remoteVideo" }),
        listener: listener,
      });
      me.joinCast(location.state.channelId);
    }
  }, []);

  function createConfig({ local, remote }: { local: string; remote: string }) {
    const config = {
      credential: {
        key: "1234567890",
        serviceId: "SERVICEID1",
      },
      view: {
        local,
        remote,
      },
      media: {
        video: {
          width: { min: 320, max: 640 },
          height: { min: 240, max: 480 },
          frameRate: { min: 8, max: 30 },
          maxBandwidth: 500,
          codec: "H264",
        },
        audio: true,
      },
    };

    return config;
  }

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
            <S.Video id="localVideo" autoPlay muted playsInline />
            <S.Video id="remoteVideo" autoPlay playsInline />
          </S.ChatFrame>
          <S.Disconnect>통화 종료</S.Disconnect>
        </S.Frame>
      </App>
    </>
  );
}

export default ChatRoom;
