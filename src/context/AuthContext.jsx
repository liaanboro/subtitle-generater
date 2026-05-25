import { createContext, useState, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    // Mock login delay
    return new Promise((resolve) => {
      setTimeout(() => {
        setUser({ email, name: email.split('@')[0] });
        resolve(true);
      }, 1000);
    });
  };

  const googleLogin = async () => {
    // Mock Google Login delay
    return new Promise((resolve) => {
      setTimeout(() => {
        setUser({ email: 'user@gmail.com', name: 'Google User', provider: 'google' });
        resolve(true);
      }, 1500);
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, googleLogin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
