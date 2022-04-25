import React, { useState } from "react";

const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState("");

  const handleLogin = (email, password) => {
     const ld={email:email, password:password};
     fetch("https://reqres.in/api/login",{
       method:"Post",
       body:JSON.stringify(ld),
       headers:{"Content-Type":"application/json"},

     })
     .then((response)=> response.json())
     .then((response)=>setToken(response.token));
    //  .catch((error) =>console.log(error));


    //  api request to reqres.in for the token
  };
  const handleLogout = () => {
    //  set token back to " " once logged out
    setToken("");
  };

  const value = { handleLogin, token, handleLogout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
