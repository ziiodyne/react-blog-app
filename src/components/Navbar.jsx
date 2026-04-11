import { Link, NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="site-header">
      <Link to="/" className="brand-block" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="logo-mark" aria-hidden="true">ZA</div>
        <div>
          <h2>Inkwell</h2>
          <p>Thoughts on code, design, and building cool stuff.</p>
        </div>
      </Link>

      <nav>
        <ul className="nav-links">
          <li>
            <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-active' : ''}>
              Posts
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-active' : ''}>
              Contact
            </NavLink>
          </li>
          <li>
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
