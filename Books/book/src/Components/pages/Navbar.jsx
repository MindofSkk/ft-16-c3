import { useContext } from "react";
import { NavLink } from "react-router-dom";
import {Navbarstyled} from "../Book.styled";
import { AuthContext } from "../context/AuthContext";
import {About} from "./About"
import Books from "./Books"
import { Login } from "./Login";



export const Navbar = () => {
  //const { token } = useContext(AuthContext);
  // use token to chnage the text from Login to Logout once logged in successfully
 
  return (
    <>
      <nav>
        <Navbarstyled>
          <NavLink style = {{textDecoration:'none' ,color:'white',
               fontSize:"20px",paddingTop:"20px"}}
           to="Home">Home</NavLink>
          <NavLink style = {{textDecoration:'none' ,color:'white',
               fontSize:"20px",paddingTop:"20px"}}
          to ="About">About</NavLink>
          <NavLink style = {{textDecoration:'none' ,color:'white',
               fontSize:"20px",paddingTop:"20px"}}
          to="Book">Book</NavLink>   

        </Navbarstyled>
        {/* keep all the NavLinks here */}
        
      </nav>
    </>
  );
};