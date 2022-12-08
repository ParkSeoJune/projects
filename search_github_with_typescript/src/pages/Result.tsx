import React from "react";
import { useLocation } from "react-router-dom";
import {
  Background,
  Box,
  Description,
  Nickname,
  Profile,
} from "../Components/H";

function Result(): JSX.Element {
  const location = useLocation().state;

  return (
    <>
      <Background>
        <Box>
          <Profile src={location.image} />
          <Nickname>{location.name}</Nickname>
          <Description>{location.description}</Description>
          <div>팔로워 : {location.followers}명</div>
        </Box>
      </Background>
    </>
  );
}

export default Result;
