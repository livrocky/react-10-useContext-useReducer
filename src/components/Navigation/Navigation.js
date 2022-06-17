import { useContext } from 'react';
import AuthContext from '../../store/authContext';
import css from './Navigation.module.css';

function Navigation() {
  const { isLoggedIn, logout } = useContext(AuthContext);
  return (
    <nav className={css.nav}>
      <a href='#'>Home</a>
      {!isLoggedIn && <a href='#'>Login</a>}
      {isLoggedIn && (
        <a role='button' onClick={logout} href='#'>
          Logout
        </a>
      )}
    </nav>
  );
}

export default Navigation;
