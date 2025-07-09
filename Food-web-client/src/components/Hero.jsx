import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#07c8cb]/20 via-white to-[#09596c]/10 overflow-hidden pt-[20vh] pb-[10vh] px-4">
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#07c8cb]/30 rounded-full opacity-40 blur-2xl -z-10 animate-pulse" style={ { filter: 'blur(80px)' } } />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#d15b37]/20 rounded-full opacity-40 blur-2xl -z-10 animate-pulse" style={ { filter: 'blur(80px)' } } />
      <div className="container mx-auto max-w-7xl flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-0">
        {/* Left: Text */ }
        <div className="flex-1 flex flex-col items-start justify-center space-y-8 px-2 md:px-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#09596c] leading-tight drop-shadow-lg">
            We are <span className="text-[#d15b37]">Serious</span> <br className="hidden md:inline" />
            About <span className="text-[#07c8cb]">Food</span> &amp; <span className="text-[#0b7c90]">Delivery</span>
          </h1>
          <p className="text-lg md:text-xl text-[#0b7c90] max-w-xl">
            Discover a world of flavors delivered to your door. Fast, fresh, and always delicious. Join thousands who trust <span className="font-bold text-[#07c8cb]">FoodHunt</span> for their cravings!
          </p>
          <NavLink to="/menu">
            <button className="bg-gradient-to-r from-[#07c8cb] via-[#0b7c90] to-[#09596c] hover:from-[#0b7c90] hover:to-[#07c8cb] transition-all duration-300 shadow-lg rounded-full px-10 py-3 text-xl font-bold text-white tracking-wide uppercase active:scale-95">
              Explore Now
            </button>
          </NavLink>
        </div>
        {/* Right: Image */ }
        <div className="flex-1 flex justify-center items-center">
          <img
            src={ '/banner1.png' }
            alt="banner img"
            className="h-[28rem] w-auto object-contain drop-shadow-2xl animate-fade-in"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
