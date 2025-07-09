import food from "../assets/food1.avif";

const Special = () => {
  return (
    <section className="bg-gradient-to-br from-[#07c8cb]/10 via-white to-[#09596c]/10 py-16 px-4 overflow-hidden">
      {/* Decorative Blobs */ }
      <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-12">
        {/* Image */ }
        <div className="flex-1 flex justify-center items-center">
          <img
            src={ food }
            alt="Special food"
            className="h-[22rem] w-[26rem] rounded-3xl object-cover shadow-2xl border-4 border-[#07c8cb]/30"
          />
        </div>
        {/* Text Content */ }
        <div className="flex-1 flex flex-col gap-7 items-start justify-center">
          <h2 className="md:text-6xl text-3xl font-extrabold text-[#09596c] leading-tight drop-shadow-lg">
            Best Food in <span className="text-[#07c8cb]">Your</span> Home <span className="text-[#d15b37]">Town</span>
          </h2>
          <p className="text-lg md:text-xl text-[#0b7c90] max-w-xl">
            Experience the taste of excellence with our chef&apos;s special dishes, made from the freshest ingredients and delivered hot to your doorstep. Treat yourself to a culinary journey like no other!
          </p>
          <button className="mt-2 bg-gradient-to-r from-[#07c8cb] via-[#0b7c90] to-[#09596c] hover:from-[#0b7c90] hover:to-[#07c8cb] transition-all duration-300 shadow-lg rounded-full px-8 py-3 text-lg font-bold text-white tracking-wide uppercase active:scale-95">
            Order Special Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Special;
