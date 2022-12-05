import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Background, Input, Logo, Box } from "../Components/H";
import Result from "./Result";

const Search = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [followers, setFo] = useState();
  const [image, setImage] = useState("");
  const onChange = (e) => setValue(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    // 값 넘겨주기
    getUser(value);
    navigate("/profile", {
      state: {
        name: name,
        description: description,
        followers: followers,
        image: image,
      },
    });
  };

  const getUser = async (username) => {
    const token = "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";
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
      setName(response.data.name);
      setDescription(response.data.bio);
      setFo(response.data.followers);
      setImage(response.data.avatar_url);
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
