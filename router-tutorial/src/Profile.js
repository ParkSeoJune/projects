import React from "react";
import { useParams } from "react-router-dom";

const profileData = {
  velopert: {
    name: "김민준",
    description:
      "Frontend Engineer @ Laftel Inc. 재밌는 것만 골라서 하는 개발자",
  },
  gildong: {
    name: "홍길동",
    description: "전래동화의 주인공",
  },
};

const Profile = () => {
  const { username } = useParams(); // v6에서는 match.params를 사용할 수 없어서 useParams()로 받아온다
  const profile = profileData[username];
  if (!profile) {
    return <div>존재하지 않는 유저입니다</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
