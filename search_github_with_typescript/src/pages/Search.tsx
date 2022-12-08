import React, { useState } from "react";
import axios from "axios";
import { Background, Box, Input, Logo } from "../Components/H";
import { useNavigate } from "react-router-dom";

const Search = (): JSX.Element => {
  const nagivate = useNavigate();
  const [value, setvalue] = useState<string>("");
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setvalue(e.target.value);
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    getUser(value);
  };

  const getUser = async (username: string) => {
    const token = process.env.REACT_APP_API_TOKEN;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await axios.get(
        `https://api.github.com/users/` + username,
        config
      );

      nagivate("/profile", {
        state: {
          name: response.data.name,
          description: response.data.bio,
          followers: response.data.followers,
          image: response.data.avatar_url,
        },
      });
    } catch (e) {
      throw new Error(`에러가 났습니다`);
    }
  };

  return (
    <>
      <Background>
        <Box>
          <Logo />
          <div>Search your ID</div>
          <form onSubmit={onSubmit}>
            <Input onChange={onChange} value={value} />
          </form>
        </Box>
      </Background>
    </>
  );
};

export default Search;
