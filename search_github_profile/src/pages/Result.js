import React from "react";
import { useLocation } from "react-router-dom";
import {
  Profile,
  Nickname,
  Description,
  Background,
  Box,
} from "../Components/H";

function Result() {
  const location = useLocation().state;
  console.log(location.name);
  console.log(location.description);
  console.log(location.followers);
  console.log(location.image);
  return (
    <>
      <Background>
        <Box>
          <Profile image={location.image} />
          <Nickname>{location.name}</Nickname>
          <Description>{location.description}</Description>
          <div>팔로워 : {location.followers}명</div>
        </Box>
      </Background>
    </>
  );
}

export default Result;
