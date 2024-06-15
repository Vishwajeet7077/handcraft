import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home'
function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
          <Route path='/' exact Component={Home}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
