import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import SignIn from './pages/SignIn';
import RegisterSelection from './pages/RegisterSelection';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Overview from './pages/Overview';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Makers from './pages/Makers';
import Investors from './pages/Investors';
import InvestorInterest from './pages/InvestorInterest';
import Header from './components/Header';

function AppContent() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className={`bg-bg-primary text-text-primary flex flex-col font-quicksand ${isAdmin ? 'h-screen overflow-hidden' : 'min-h-screen'}`}>
      {/* Top Banner */}
      <div className="h-2 w-full bg-brand flex-shrink-0"></div>
      
      {/* Header */}
      <div className="flex-shrink-0 z-40 relative shadow-sm">
        <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} isSidebarOpen={isSidebarOpen} />
      </div>

      {/* Main Content Area */}
      <div className={`flex flex-col ${isAdmin ? 'flex-grow overflow-hidden relative' : 'flex-grow'}`}>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/register" element={<RegisterSelection />} />
          <Route path="/register/:type" element={<Register />} />
          <Route path="/admin" element={<Dashboard isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />}>
            <Route index element={<Overview />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:id" element={<ProjectDetails />} />
            <Route path="makers" element={<Makers />} />
            <Route path="investors" element={<Investors />} />
            <Route path="interest" element={<InvestorInterest />} />
          </Route>
        </Routes>
      </div>

      {/* Footer */}
      {!isAdmin && (
        <footer className="pb-12 pt-8 text-center text-sm text-text-tertiary font-quicksand mt-auto flex-shrink-0">
          Makemation AI Tech Festivals · Powered by Rise Interactives Studio
        </footer>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
