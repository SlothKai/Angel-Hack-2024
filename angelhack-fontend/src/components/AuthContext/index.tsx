import { createContext } from "react";

interface AuthContextProps {
  isLoggedIn: () => Promise<boolean>;
  logout: () => void;
  isUserLoggedIn: boolean;
  setIsUserLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthContext = createContext<AuthContextProps | null>(null);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const isLoggedIn = async () => {
    // placeholder
  };

  const store: AuthContextProps = {
    // isLoggedIn,
    // isUserLoggedIn,
    // setIsUserLoggedIn,
    // logOut,
  };

  return <AuthContext.Provider value={store}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
