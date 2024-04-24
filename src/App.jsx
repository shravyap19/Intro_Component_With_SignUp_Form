import "./App.css";
import SignUpComponent from "./SignUpComponent";
import TextComponent from "./TextComponent";

function App() {
  return (
    <div className="container">
      <div>
        <TextComponent />
      </div>
      <div>
        <SignUpComponent />
      </div>
    </div>
  );
}

export default App;
