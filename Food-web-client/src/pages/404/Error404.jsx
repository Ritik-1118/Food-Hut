import { NavLink } from "react-router-dom";

const Error404 = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#07c8cb]/10 via-white to-[#09596c]/10 py-16 px-4">
      <div className="flex flex-col items-center justify-center text-center max-w-lg mx-auto p-8 bg-white/90 rounded-3xl shadow-2xl border-t-8 border-[#d15b37]">
        {/* Themed Illustration */ }
        <div className="mb-6">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="60" cy="60" r="56" fill="#07c8cb" fillOpacity="0.12" />
            <ellipse cx="60" cy="90" rx="32" ry="8" fill="#0b7c90" fillOpacity="0.12" />
            <path d="M40 70 Q60 90 80 70" stroke="#d15b37" strokeWidth="4" fill="none" />
            <circle cx="48" cy="54" r="6" fill="#07c8cb" />
            <circle cx="72" cy="54" r="6" fill="#07c8cb" />
            <ellipse cx="48" cy="56" rx="2" ry="1" fill="#09596c" />
            <ellipse cx="72" cy="56" rx="2" ry="1" fill="#09596c" />
          </svg>
        </div>
        <h1 className="text-6xl font-extrabold text-[#d15b37] mb-2 drop-shadow-lg">404</h1>
        <h2 className="text-2xl font-bold text-[#09596c] mb-4">Oops! Page Not Found</h2>
        <p className="text-[#0b7c90] mb-8 text-lg">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.<br />
          Let&apos;s get you back to something delicious!
        </p>
        <NavLink to="/" className="inline-block">
          <button className="bg-gradient-to-r from-[#07c8cb] via-[#0b7c90] to-[#09596c] hover:from-[#0b7c90] hover:to-[#07c8cb] transition-all duration-300 shadow-lg rounded-full px-8 py-3 text-lg font-bold text-white tracking-wide uppercase active:scale-95">
            Go Home
          </button>
        </NavLink>
      </div>
    </section>
  );
};

export default Error404;