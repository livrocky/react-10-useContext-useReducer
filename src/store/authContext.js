import { createContext } from 'react';

// sukuriam context
//argumentai tik autocompletui
const AuthContext = createContext({
  user: '',
  login: () => {},
  logout: () => {},
});

AuthContext.displayName = 'AuthContext';

export default AuthContext;
