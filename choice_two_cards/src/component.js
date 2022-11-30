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

  &:hover {
    transform: rotateY(180deg);
  }
`;

export const Front = styled.div`
  background-color: red;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;

export const Back = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: royalblue;
  transform: rotateY(180deg);
`;
