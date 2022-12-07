import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greetings from "./Greeting";
import Counter from "./Counter";
import MyForm from "./MyForm";

function App() {
  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };
  return <MyForm onSubmit={onSubmit} />;
}

export default App;
