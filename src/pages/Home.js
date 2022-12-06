import axios from "axios";
import { useState } from "react";
import { Background, Input, Box, LoginButton } from "../Components/H";

const Home = () => {
  const [id, setId] = useState("");
  const [password, setPw] = useState("");
  const onChangeId = (e) => setId(e.target.value);
  const onChangePw = (e) => setPw(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(id);
    console.log(password);
    LogIn(id, password);
  };

  const onClick = () => {
    console.log(id);
    console.log(password);
    LogIn(id, password);
  };

  const LogIn = async (id, password) => {
    const config = {
      userId: id,
      password: password,
    };

    try {
      const response = await axios.post(
        `http://glog-env.eba-pvh8srk2.ap-northeast-2.elasticbeanstalk.com/auth/signin`,
        config
      );

      console.log("success");
      localStorage.setItem("token", JSON.stringify(response.data));
      console.log(JSON.parse(localStorage.getItem("token")).accessToken);

      //값을 recoil에 넣기
    } catch (e) {
      throw new Error(`에러입니다.`);
    }
  };

  return (
    <>
      <Background>
        <Box>
          {/* <Logo /> */}
          <div>Login</div>
          <form onSubmit={onSubmit}>
            <Input
              placeholder="아이디를 입력해주세요"
              onChange={onChangeId}
              value={id}
            />
          </form>
          <form onSubmit={onSubmit}>
            <Input
              className="last"
              placeholder="비밀번호를 입력해주세요"
              type="password"
              onChange={onChangePw}
              value={password}
            />
          </form>
          <LoginButton onClick={onClick}>로그인</LoginButton>
        </Box>
      </Background>
    </>
  );
};

export default Home;
