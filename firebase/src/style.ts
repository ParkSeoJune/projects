import styled from "@emotion/styled";

export const App = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SignInButton = styled.button`
  border-style: none;
  border-radius: 12px;
  width: 160px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #77d6b3;
  color: #ffffff;
  font-weight: 600;
  cursor: pointer;
`;

export const Profile = styled.img<{ url: string }>`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Text = styled.p`
  font-size: 22px;
  font-weight: 600;
  color: #000000;
  margin: 0px;
`;
