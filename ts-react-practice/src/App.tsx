import React from "react";
import "./App.css";
import Greetings from "./Greeting";
import Counter from "./Counter";
import MyForm from "./MyForm";
import ReducerSample from "./ReducerSample";
import { SampleProvider } from "./SampleContext";

function App() {
  return (
    <SampleProvider>
      <ReducerSample />;
    </SampleProvider>
  );
}

export default App;
