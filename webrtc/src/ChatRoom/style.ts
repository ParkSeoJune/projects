import styled from "@emotion/styled";

export const Frame = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Top = styled.section`
  width: 700px;
  height: 140px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const User = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Profile = styled.img`
  width: 80px;
  height: 80px;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 50%;
`;

export const UserName = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #000000;
  margin-top: 20px;
`;

export const ChatFrame = styled.section`
  width: 100vw;
  height: 600px;
  display: flex;
  justify-content: space-between;
`;

export const Face = styled.div`
  width: 49.5vw;
  height: 600px;
  background-color: #000000;
  border-radius: 14px;
`;

export const Disconnect = styled.button`
  width: 150px;
  height: 50px;
  text-align: center;
  background-color: #f2c0c0;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  border-style: none;
  border-radius: 12px;
  margin-top: 50px;
`;
