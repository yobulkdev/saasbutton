import { YoButton } from "yoembed";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h2>This is my SAAS</h2>
      <hr />
      <br />
      <YoButton
        templateId={"63679e5d538e86e59f67e257"}
        yoHostUrl={"http://localhost:3000"}
      />
    </div>
  );
}

export default App;
