import styled from "styled-components";

export const Flip = styled.div`
  width: 200px;
  height: 250px;
  perspective: 1100px;
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: 0.4s;
  transform-style: preserve-3d;
`;
