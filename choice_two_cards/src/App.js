import "./App.css";
import { Flip, Card, Front, Back } from "./component";

function App() {
  return (
    <>
      <Flip>
        <Card>
          <Front></Front>
          <Back></Back>
        </Card>
      </Flip>
    </>
  );
}

export default App;