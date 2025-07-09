import { useState } from "react";
import logo from "../assets/Logo.png";
import Swal from "sweetalert2";
import { TiThMenu } from "react-icons/ti";
import { LuUtensilsCrossed } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { useAuth } from "../store/auth";
import { UserCart } from "../store/card";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const { islogin, Logoutuser } = useAuth();
  const { itemcount } = UserCart();

  const Logout = async () => {
    const result = await Swal.fire( {
      title: "Are you sure you want to logout?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Logout",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#f58a47",
    } );
    if ( result.isConfirmed ) {
      try {
        Logoutuser();
        window.location.href = "/login";
      } catch ( error ) {
        console.error( "Error logging out:", error );
      }
    }
  };
  const [ nav, setNav ] = useState( false );
  const handleNav = () => {
    setNav( !nav );
  };

  return (
    <nav className="sticky top-0 left-0 w-full z-50 bg-white/80 shadow-lg backdrop-blur-md transition-all duration-300">
      <div className="py-3 px-10 md:px-16 lg:px-6 container mx-auto flex items-center justify-between">
        {/* Logo */ }
        <NavLink to="/" className="flex items-center gap-2 group">
          <img src={ logo } alt="FoodHunt Logo" className="h-14 w-auto drop-shadow-md transition-transform duration-200 group-hover:scale-105" />
          <span className="hidden md:inline text-2xl font-extrabold tracking-wide text-[#191919] drop-shadow-sm">FoodHunt</span>
        </NavLink>
        {/* Desktop Nav */ }
        <div className="lg:flex hidden gap-8 items-center">
          <NavLink
            to="/"
            className={ ( { isActive } ) =>
              `flex flex-row items-center gap-2 text-[#191919] text-xl font-medium relative after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-[#07c8cb] after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 ${isActive ? 'after:scale-x-100' : ''}`
            }
          >
            <FaHome /> Home
          </NavLink>
          <NavLink
            to="/about"
            className={ ( { isActive } ) =>
              `text-[#191919] text-xl font-medium relative after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-[#07c8cb] after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 ${isActive ? 'after:scale-x-100' : ''}`
            }
          >
            Why us?
          </NavLink>
          <NavLink
            to="/menu"
            className={ ( { isActive } ) =>
              `text-[#191919] text-xl font-medium relative after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-[#07c8cb] after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 ${isActive ? 'after:scale-x-100' : ''}`
            }
          >
            Our Menu
          </NavLink>
          <NavLink
            to="/cart"
            className={ ( { isActive } ) =>
              `text-[#191919] flex flex-row items-center gap-2 text-xl font-medium relative after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-[#07c8cb] after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 ${isActive ? 'after:scale-x-100' : ''}`
            }
          >
            <FaShoppingCart /> Cart
            { itemcount > 0 && (
              <span className="text-white bg-cyan-500 absolute -top-3 -right-6 rounded-full text-xs px-2 font-semibold flex items-center justify-center shadow-md animate-bounce">
                { itemcount }
              </span>
            ) }
          </NavLink>
          { islogin ? (
            <div className="flex flex-row gap-6 items-center">
              <NavLink to="/profile">
                <button className="flex flex-row items-center gap-2 text-[#f58a47] bg-white/10 shadow-lg rounded-full px-6 py-2 text-xl font-medium transition-transform duration-150 hover:scale-105 active:scale-95 focus:outline-none">
                  <CgProfile /> Profile
                </button>
              </NavLink>
              <button
                className="bg-[#f58a47] rounded-full text-white shadow-lg px-8 py-2 text-xl font-medium transition-transform duration-150 hover:scale-105 active:scale-95 focus:outline-none"
                onClick={ Logout }
              >
                Logout
              </button>
            </div>
          ) : (
            <NavLink to="/login">
              <button className="bg-[#f58a47] rounded-full text-white shadow-lg px-8 py-2 text-xl font-medium transition-transform duration-150 hover:scale-105 active:scale-95 focus:outline-none">
                Login
              </button>
            </NavLink>
          ) }
        </div>
        {/* Mobile Nav Toggle */ }
        <div className="block lg:hidden z-40" onClick={ handleNav }>
          { nav ? (
            <LuUtensilsCrossed size={ 28 } className="text-[#191919] cursor-pointer transition-transform duration-200 hover:scale-110" />
          ) : (
            <TiThMenu size={ 28 } className="text-blue-500 cursor-pointer transition-transform duration-200 hover:scale-110" />
          ) }
        </div>
        {/* Mobile Nav Drawer */ }
        <div
          className={ `absolute w-3/4 sm:w-2/5 h-screen py-2 px-4 text-xl font-medium ease-in shadow-lg backdrop-blur-md bg-white/95 top-0 duration-200 ${nav ? "right-0" : "right-[-100%]"} pt-24 z-50 rounded-l-3xl border-l-4 border-[#07c8cb]` }
        >
          <div className="flex flex-col gap-8 items-center">
            <NavLink
              to="/"
              className="flex flex-row items-center gap-2 text-[#191919] text-lg font-medium hover:text-blue-500"
              onClick={ () => setNav( false ) }
            >
              <FaHome /> Home
            </NavLink>
            <NavLink
              to="/about"
              className="text-[#191919] text-lg font-medium hover:text-blue-500"
              onClick={ () => setNav( false ) }
            >
              Why us?
            </NavLink>
            <NavLink
              to="/menu"
              className="text-[#191919] text-lg font-medium hover:text-blue-500"
              onClick={ () => setNav( false ) }
            >
              Our Menu
            </NavLink>
            <NavLink
              to="/cart"
              className="text-[#191919] flex flex-row items-center gap-2 text-lg font-medium hover:text-blue-500 relative"
              onClick={ () => setNav( false ) }
            >
              <FaShoppingCart /> Cart
              { itemcount > 0 && (
                <span className="text-white bg-cyan-500 absolute -top-3 -right-6 rounded-full text-xs px-2 font-semibold flex items-center justify-center shadow-md animate-bounce">
                  { itemcount }
                </span>
              ) }
            </NavLink>
            { islogin ? (
              <div className="flex flex-col gap-6 items-center">
                <NavLink to="/profile" onClick={ () => setNav( false ) }>
                  <button className="flex flex-row items-center gap-2 text-[#f58a47] bg-white/10 shadow-lg rounded-full px-6 py-2 text-lg font-medium transition-transform duration-150 hover:scale-105 active:scale-95 focus:outline-none">
                    <CgProfile /> Profile
                  </button>
                </NavLink>
                <button
                  className="bg-[#f58a47] rounded-full text-white shadow-lg px-8 py-2 text-lg font-medium transition-transform duration-150 hover:scale-105 active:scale-95 focus:outline-none"
                  onClick={ Logout }
                >
                  Logout
                </button>
              </div>
            ) : (
              <NavLink to="/login" onClick={ () => setNav( false ) }>
                <button className="bg-[#f58a47] rounded-full text-white shadow-lg px-8 py-2 text-lg font-medium transition-transform duration-150 hover:scale-105 active:scale-95 focus:outline-none">
                  Login
                </button>
              </NavLink>
            ) }
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
