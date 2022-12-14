import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/Homepage/Homepage";
import Shop from "./Pages/Shop/Shop";
import Nav from "./Nav";
import { UserContext } from "./userContext";
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <UserContext.Provider value="Welcome guys, What do you want today ">
          <Route index path="./" element={<Homepage />} />
          <Route path="./shop" element={<Shop />} />
        </UserContext.Provider>
      </Routes>
    </div>
  );
}

export default App;
