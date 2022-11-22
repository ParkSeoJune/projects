import styled from "styled-components";

export const Body = styled.div`
  width: 100%;
  display: flex;
  height: 913px;
  justify-content: center;
  align-items: center;
`;

export const Contents = styled.div`
  display: ${(props) => (props.isEnd ? "none" : "block")};
  max-width: 400px;
`;

export const Map = styled.div`
  width: 400px;
  /* display: flex; */
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 40px;
`;

export const Text = styled.div`
  margin-top: 50px;
  text-align: center;
`;
