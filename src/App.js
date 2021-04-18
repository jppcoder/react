import React from 'react';
import './App.css';
import ItemListContainer from './components/container/ItemListContainer';
import NavBar from './components/NavBar/NavBar';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <main>
        <ItemListContainer text="Hola bienvenido a mi pagina de RetroGames Arcade" className="intro"/>
      </main>
    </div>
  

  );
}

export default App;
