import "./App.css";
import React, { useEffect, useState } from "react";
import KanbanBoard from "./components/Board";
import Loading from './components/Loading/Loading';
function App() {
  return (
    <div className="App">
      <header className="app-header">
        {/* <h1>Kanban Board App</h1>
        <h2>HELLO</h2> */}
      </header>
      {/* <Loading/> */}
      <main className="app-main">
        <KanbanBoard />
      </main>
    </div>
  );
}

export default App;
