import { useContext, useState, createContext } from "react";

type UserCtx = {
  login: () => void;
  currentUser?: string;
};

const AuthContext = createContext<UserCtx | null>(null);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<string>();

  function login(email = "jd@gmail.com", password = "123123") {
    setCurrentUser(email);
  }

  const value = {
    currentUser,
    login,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
