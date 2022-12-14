import styled from "styled-components";
import logo from "../GitHub-Mark/PNG/GitHub-Mark-Light-120px-plus.png";

export const Background = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #282c34;
  color: white;
  font-weight: 700;
  font-size: 24px;
`;

export const Box = styled.div`
  width: 500px;
  height: 500px;
  text-align: center;
`;

export const Logo = styled.img.attrs({
  src: `${logo}`,
})`
  display: block;
  width: 100px;
  height: 100px;
  margin-left: 200px;
  margin-right: 200px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 242px;
  height: 30px;
  margin-top: 20px;
  margin-left: 125px;
  margin-right: 125px;
`;

export const Profile = styled.img<{ src: string }>`
  background-color: url(${(e) => e.src});
  background-size: cover;
  width: 300px;
  height: 300px;
  margin-bottom: 20px;
  border-radius: 50%;
`;

export const Nickname = styled.div`
  font-size: 30px;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const Description = styled.div`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 40px;
`;
