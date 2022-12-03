import "./App.css";
import { Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <div>
      <Route path="/" exact={true} component={Home}></Route>
      <Route path="/about" component={About} />
    </div>
  );
}

export default App;
