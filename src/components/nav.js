import '../App.css';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav className="navBar">
    <h1>Math Magician</h1>
    <ul className="menuNav">
      {/* <li><a href="/">Home</a></li>
      <li><a href="/calculator">Calculator</a></li>
      <li><a href="/quotes">Quotes</a></li> */}

      <Link to="/">
        <li className="menuNav" title="home">
          Home
        </li>
      </Link>

      <Link to="/calculator">
        <li className="menuNav" title="calculator">
          Calculator
        </li>
      </Link>

      <Link to="/quotes">
        <li className="menunav" title="quotes">
          Quotes
        </li>
      </Link>
    </ul>
  </nav>
);

export default Nav;
