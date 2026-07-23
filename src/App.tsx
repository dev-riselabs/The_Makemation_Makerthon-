import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import SignIn from "./pages/SignIn";
import RegisterSelection from "./pages/RegisterSelection";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Overview from "./pages/Overview";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Header from "./components/Header";
import Investor from "./pages/Investor";
import InvestorCommand from "./pages/InvestorCommand";
import InvestorProjects from "./pages/InvestorProject";

function AppContent() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");
  const isInvestor = location.pathname.startsWith("/investor");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div
      className={`bg-bg-primary text-text-primary flex flex-col font-quicksand ${isAdmin ? "h-screen overflow-hidden" : "min-h-screen"}`}
    >
      {/* Top Banner */}
      <div className="h-2 w-full bg-brand shrink-0"></div>

      {/* Header */}
      <div className="shrink-0 z-40 relative shadow-sm">
        <Header
          onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}
          isSidebarOpen={isSidebarOpen}
        />
      </div>

      {/* Main Content Area */}
      <div
        className={`flex flex-col ${isAdmin ? "grow overflow-hidden relative" : "grow"}`}
      >
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/register" element={<RegisterSelection />} />
          <Route path="/register/:type" element={<Register />} />
          <Route
            path="/admin"
            element={
              <Dashboard
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
              />
            }
          >
            <Route index element={<Overview />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:id" element={<ProjectDetails />} />
            <Route path="makers" element={<Makers />} />
            <Route path="investors" element={<Investors />} />
            <Route path="interest" element={<InvestorInterest />} />
          </Route>
          <Route path="/investor" element={<Investor />}>
            <Route index element={<InvestorCommand />} />
            <Route path='projects' element={<InvestorProjects/>}/>
            <Route path="projects/:id" element={<ProjectDetails />} />
          </Route>
        </Routes>
      </div>

      {/* Footer */}
      {(!isAdmin && !isInvestor) && (
        <footer className="pb-12 pt-8 text-center text-sm text-text-tertiary font-quicksand mt-auto shrink-0">
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
