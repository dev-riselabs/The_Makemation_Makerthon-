import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-bg-primary text-text-primary flex flex-col font-quicksand">
        {/* Top Banner */}
        <div className="h-2 w-full bg-brand"></div>
        
        {/* Header */}
        <header className="flex justify-between items-center px-6 py-4 bg-header-bg">
          <div>
            <img src="/dey_make_logo.png" alt="DeyMake Logo" className="h-10 object-contain" />
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <img src="/profile_image.png" alt="Profile" className="h-10 w-10 rounded-full object-cover" />
            <svg className="w-4 h-4 text-icon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </header>

        {/* Main Content Area */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register/:type" element={<Register />} />
          <Route path="/register" element={<Register />} />
        </Routes>

        {/* Footer */}
        <footer className="pb-12 pt-8 text-center text-sm text-text-tertiary font-quicksand mt-auto">
          Makemation AI Tech Festivals · Powered by Rise Interactives Studio
        </footer>
      </div>
    </Router>
  );
}

export default App;
