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

  return (
    <>
      <Background>
        <Box>
          <Profile image={location.image} />
          <Nickname>{location.name}</Nickname>
          <Description>{location.email}</Description>
          <div>팔로워 : {location.followers}명</div>
        </Box>
      </Background>
    </>
  );
}

export default Result;
