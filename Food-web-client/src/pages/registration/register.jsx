import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../../store/auth";
import axiosInstance from "../../utils/axiosInstance";
import Loader from "../../shared/loader";
const Register = () => {
  const [ user, setuser ] = useState( {
    username: "",
    email: "",
    password: "",
  } );
  const { storetokeinLs, islogin } = useAuth();

  const [ isLoading, setIsLoading ] = useState( true );

  const handleInput = ( e ) => {
    let name = e.target.name;
    let value = e.target.value;
    setuser( {
      ...user,
      [ name ]: value,
    } );
  };
  const handleSubmit = async ( e ) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post(
        "/auth/register",
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if ( response.status === 201 || response.status === 200) {
        const data = response.data;
        storetokeinLs( data.token );
        setuser( { username: "", email: "", password: "" } );
        window.location.href = "/";
        toast.success( data.message );
      } else {
        const data = response.data;
        toast.error( data.message || "An error occurred" );
      }
    } catch ( error ) {
      console.log(error)
      error.response.data.msg ? toast.error( error.response.data.msg ) : toast.error( "An unexpected error occurred" );
      
    }
  };
  useEffect( () => {
    const timer = setTimeout( () => {
      setIsLoading( false ); // After 1 second, hide the loader
    }, 1000 );
    return () => clearTimeout( timer );
  }, [] );
  if ( isLoading || islogin ) {
    return <Loader />; // Show loader if still loading or if user is logged in
  }
  return (
    <section className="min-h-screen flex items-center justify-center py-16 px-4">
      <div className="container mx-auto flex items-center justify-center">
        <ToastContainer />
        <div className="w-full max-w-md bg-white/90 rounded-3xl shadow-2xl p-10 flex flex-col items-center border-t-8 border-orange-400">
          <div className="mb-8 text-center">
            <h2 className="text-4xl font-extrabold text-[#09596c] mb-2 drop-shadow-lg">Create Account</h2>
            <p className="text-lg text-[#0b7c90]">Join FoodHunt and start your delicious journey!</p>
          </div>
          <form method="post" onSubmit={ handleSubmit } className="w-full flex flex-col gap-6">
            <div className="relative z-0 w-full group">
              <input
                type="text"
                name="username"
                id="username"
                className="block py-3 px-4 w-full text-base text-[#09596c] bg-transparent border-2 border-[#07c8cb] rounded-xl focus:border-[#0b7c90] focus:outline-none transition"
                placeholder="Enter User Name"
                value={ user.username }
                onChange={ handleInput }
                required
                autoComplete="username"
              />
            </div>
            <div className="relative z-0 w-full group">
              <input
                type="email"
                name="email"
                id="email"
                className="block py-3 px-4 w-full text-base text-[#09596c] bg-transparent border-2 border-[#07c8cb] rounded-xl focus:border-[#0b7c90] focus:outline-none transition"
                placeholder="Enter Email"
                value={ user.email }
                onChange={ handleInput }
                required
                autoComplete="email"
              />
            </div>
            <div className="relative z-0 w-full group">
              <input
                type="password"
                name="password"
                id="password"
                className="block py-3 px-4 w-full text-base text-[#09596c] bg-transparent border-2 border-[#07c8cb] rounded-xl focus:border-[#0b7c90] focus:outline-none transition"
                placeholder="Enter password"
                value={ user.password }
                onChange={ handleInput }
                required
                autoComplete="new-password"
              />
            </div>
            <button
              className="mt-2 bg-gradient-to-r from-[#07c8cb] via-[#0b7c90] to-[#09596c] hover:from-[#0b7c90] hover:to-[#07c8cb] transition-all duration-300 shadow-lg rounded-full px-8 py-3 text-lg font-bold text-white tracking-wide uppercase active:scale-95"
              type="submit"
            >
              Register
            </button>
          </form>
          <div className="mt-8 text-center">
            <span className="text-[#0b7c90] text-base">
              Already have an account?{ ' ' }
              <NavLink to="/login" className="text-orange-400 font-bold hover:underline">
                Login
              </NavLink>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
