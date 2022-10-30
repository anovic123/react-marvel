import { Link, NavLink } from 'react-router-dom';
import './appHeader.scss';

const AppHeader = () => {
  return (
    <header className="app__header">
      <h1 className="app__title">
        <Link to="react-marvel/" href="#">
          <span>Marvel</span> information portal
        </Link>
      </h1>
      <nav className="app__menu">
        <ul>
          <li>
            <NavLink
              end
              style={({ isActive }) => ({ color: isActive ? '#9f0013' : '#666' })}
              to="react-marvel/"
            >
              Characters
            </NavLink>
          </li>
          <div style={{ color: '#666' }}>/</div>
          <li>
            <NavLink
              end
              style={({ isActive }) => ({ color: isActive ? '#9f0013' : '#666' })}
              to="react-marvel/comics"
            >
              Comics
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;
