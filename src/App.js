// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import Quote from './components/quote';
import Nav from './components/nav';
import Home from './components/homepage';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <div className="pageContainer">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/quotes" element={<Quote />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
