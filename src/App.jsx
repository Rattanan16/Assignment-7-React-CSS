import { useState } from "react"
import Header from "./components/Header"
import AgeComponents from "./components/Personlist"
import "./App.css";
function App() {

  return(
  <>
  <div className="app">
    <Header />
    <main>
    <AgeComponents />
  </main>
  </div>
  </>
  );
}


export default App
