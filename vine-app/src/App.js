import logo from "./logo.svg";
import "./App.css";
import LandingPage from "../src/Screens/Landing Page/LandingPage";

function App() {
  // const header = (
  //   <div>
  //     <h1>Hello Reujoy!</h1>
  //   </div>
  // );
  // const user = {
  //   firstname: "Ekow",
  //   lastname: "Amissah",
  // };

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Hello Reujoy!
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Vine's Care Preparatory School
    //     </a>
    //   </header>
    // </div>

    <LandingPage></LandingPage>
    // <div className='container'>
    //   {header}
    //   {user.firstname + ' ' + user.lastname}
    // </div>
  );
}

export default App;
