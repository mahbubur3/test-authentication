import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Login from './pages/Login';
import Register from './pages/Register';


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' exect element={<Register />} />
          <Route path='/login' exect element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
