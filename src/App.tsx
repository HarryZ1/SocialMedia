import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Main } from './pages/main/main';
import { Login } from './pages/login';
import { CreatePost } from './pages/create-post/create-post';
import { Navbar } from './components/navbar';
import './index.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/createpost" element={<CreatePost />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
