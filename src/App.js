import './App.css';
import Calculator from './components/Calculator';
import Quote from './components/quote';
import Nav from './components/nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="quote-wrapper">
        <Quote />
      </div>
      <div className="calculator-wrapper">
        <Calculator />
      </div>
    </div>
  );
}

export default App;
