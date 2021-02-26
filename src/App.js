import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Routes from "./components/Pages/Routes";
// import Modal from "./components/modal/Modal";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <>
          <Routes />
        </>
      </div>
    </BrowserRouter>
  );
}

export default App;
