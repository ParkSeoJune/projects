import styled from "@emotion/styled";

export const MainFrame = styled.main`
  width: 400px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: #000000;
  margin-top: 80px;
  text-align: center;
`;

export const Temperature = styled.a`
  font-size: 44px;
  font-weight: 600;
  color: #000000;
  margin-top: 20px;
`;

export const Description = styled.a<{ color: string }>`
  font-size: 16px;
  color: ${(props) => props.color};
  margin-top: 40px;
  font-weight: 600;
`;

export const Icon = styled.img`
  width: 100px;
  height: 100px;
  margin-top: 40px;
`;
