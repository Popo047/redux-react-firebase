import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateProject from "./components/projects/CreateProject";
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
