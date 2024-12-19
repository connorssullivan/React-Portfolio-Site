import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Correct import for default export
import { About, Contact, Home, Projects, Reading } from "./pages";


const App = () => {
  return (
    <Router>
      <Navbar />
      <main className='bg-slate-300/20'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/reading' element={<Reading/>} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
