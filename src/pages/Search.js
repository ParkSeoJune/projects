import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Background, Input, Logo, Box } from "../Components/H";

const Search = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const onChange = (e) => setValue(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    // 값 넘겨주기
    getUser(value);
  };

  const getUser = async (username) => {
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

      navigate("/profile", {
        state: {
          name: response.data.name,
          description: response.data.bio,
          followers: response.data.followers,
          image: response.data.avatar_url,
        },
      });
    } catch (e) {
      throw new Error(`에러다`);
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
