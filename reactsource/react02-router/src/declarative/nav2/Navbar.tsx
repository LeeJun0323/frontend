// / Home
// / about About
// /contact Contact
// /account/login
// /account/register

import { Link, NavLink, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./about";
import Contact from "./contact";
import Login from "./Login";
import Register from "./Register";
import Account from "./account";
import Profile from "./Profile";

const Navbar = () => {
  return (
    <div>
      <nav className="flex bg-gray-300 p-2 gap-5 h-20 items-center">
        <Link to="/">Home</Link>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/account">Account</NavLink>
        {/* <NavLink to="/account/login">Login</NavLink>
        <NavLink to="/account/register">Register</NavLink> */}
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/" element={<About />}></Route>
        <Route path="/" element={<Contact />}></Route>
        <Route path="/account" element={<Account />}>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
          {/* 동적파라메터 */}
          <Route path="profile/:id" element={<Profile />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default Navbar;
