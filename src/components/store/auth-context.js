import React, { useEffect, useState } from 'react';




const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => { },
  onLogIn: (email, password) => {

  }
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const getStatus = localStorage.getItem('isLogged');

    if (getStatus === '1') {
      setIsLoggedIn(true);
    }
  }, [])

  const loginHandler = (email, password) => {
    localStorage.setItem('isLogged', '1');
    setIsLoggedIn(true);
    console.log(isLoggedIn, 'rand');
  }

  const logoutHandler = () => {
    setIsLoggedIn(false);
    console.log(isLoggedIn);
    localStorage.removeItem('isLogged', '1')
  }
 
  return <AuthContext.Provider value={{
    isLoggedIn: isLoggedIn,
    onLogout: logoutHandler,
    onLogIn: loginHandler
}}>{props.children}</AuthContext.Provider>
}


export default AuthContext;
