import React from "react";
import './styles/App.css'
import MyNavbar from "./components/UI/navbar/MyNavbar";
import AppRouter from "./components/AppRouter";

function App() {
  return (
      <div>
          <MyNavbar/>
          <AppRouter/>
      </div>
  );
}

export default App;
