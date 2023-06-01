import "./App.css";
import React from "react";
import Login from "./components/Login";
import ProfilePage from "./components/ProfilePage";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
function App() {
  return (
    
    <Router>
      
      <div className="App">
        <Routes>
          <Route exact path="/"element={<Login/>}/>
          <Route path="/profilePage" element={<ProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
