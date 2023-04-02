import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
    <div className="App">
      <Navbar title="blagh"/>
      <h1>Welcome!</h1>
      <div className="container my-3">
        <TextForm heading="Enter text to analyse"/>
      </div>
    </div>
    </>
  );
}

export default App;
