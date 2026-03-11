import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import UserDashboard from './pages/UserDashboard';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-zinc-950">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/user" element={<UserDashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
