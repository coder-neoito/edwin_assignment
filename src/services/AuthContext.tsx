import React, { createContext, ReactNode, useEffect, useState } from 'react';

export const AuthContext = createContext<any>(null);

const AuthContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const POGR_LS_STRING = 'pogr_logged_in';
  const [userList, setUserList] = useState<Record<string, string>>({
    'test@test.com': 'P4ssword#',
  });
  const [loggedIn, setLoggedIn] = useState<string | null>(null);

  useEffect(() => {
    setLoggedIn(localStorage.getItem(POGR_LS_STRING) ?? null);
  }, []);

  const loginHandler = (data: { email: string; password: string }) => {
    const { email, password } = data;
    if (Object.keys(userList).includes(email) && userList[email] === password) {
      localStorage.setItem(POGR_LS_STRING, email);
      setLoggedIn(email);
      return { loggedIn: true, message: 'Success' };
    }
    localStorage.removeItem(POGR_LS_STRING);
    setLoggedIn(null);
    return { loggedIn: false, message: 'Invalid email or password' };
  };

  const logoutHandler = () => {
    localStorage.removeItem(POGR_LS_STRING);
    setLoggedIn(null);
  };

  const signUpHandler = (data: { email: string; password: string }) => {
    const { email, password } = data;
    if (Object.keys(userList).includes(email)) {
      localStorage.removeItem(POGR_LS_STRING);
      setLoggedIn(null);
      return { loggedIn: false, message: 'Email already exists' };
    }
    console.log({ ...userList, [email]: password });
    setUserList((pre) => ({ ...pre, [email]: password }));
    localStorage.setItem(POGR_LS_STRING, email);
    setLoggedIn(email);
    return { loggedIn: true, message: 'Success' };
  };

  const values = { loginHandler, loggedIn, logoutHandler, signUpHandler };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
