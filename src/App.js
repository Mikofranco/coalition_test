import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./pages/landingPage/LandingPage"
import AuthPage from './pages/AuthPage/AuthPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/auth' element={<AuthPage/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
