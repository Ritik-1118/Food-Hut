import PropTypes from "prop-types";

const Loader = ({ size = 56, className = "" }) => {
  return (
    <div className={`flex justify-center items-center w-full h-full ${className}`} role="status" aria-live="polite">
      <svg
        width={size}
        height={size}
        viewBox="0 0 50 50"
        className="animate-spin drop-shadow-lg"
        style={{ display: "block" }}
      >
        <defs>
          <linearGradient id="loader-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#07c8cb" />
            <stop offset="50%" stopColor="#0b7c90" />
            <stop offset="100%" stopColor="#09596c" />
          </linearGradient>
        </defs>
        <circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke="url(#loader-gradient)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray="90 60"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

Loader.propTypes = {
  size: PropTypes.number,
  className: PropTypes.string,
};

export default Loader;
