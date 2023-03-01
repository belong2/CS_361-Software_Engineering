import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home/Home';
import Checklist from './components/TravelChecklist/Checklist';
import Plan from './components/Plan/Plan';
import Budget from './components/Budget/Budget';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Nav />
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/home' element={<Home />}></Route>
              <Route path='/travel-checklist' element={<Checklist />}></Route>
              <Route path='/plan' element={<Plan />}></Route>
              <Route path='/budget' element={<Budget />}></Route>
            </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
