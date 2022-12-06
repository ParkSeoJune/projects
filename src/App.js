import { Route, Routes } from "react-router-dom";
// import Result from "./pages/Result";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/success" element={<Result />} /> */}
    </Routes>
  );
}

export default App;
