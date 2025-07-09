import PropTypes from "prop-types";
import { FaUserCircle, FaUtensils, FaShoppingCart, FaMedal, FaLeaf } from "react-icons/fa";

// Shimmer effect utility
const shimmer = "animate-[shimmer_2s_infinite_linear] bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:400%_100%]";

const SkeletonProfile = () => (
  <section className="min-h-screen w-full bg-gradient-to-br from-yellow-50 via-white to-orange-100 relative overflow-x-hidden pb-16">
    {/* Banner */}
    <div className="relative w-full h-56 md:h-64 bg-gradient-to-br from-orange-200 via-yellow-100 to-orange-300 flex items-end justify-center">
      <div className="absolute bottom-0 left-0 w-full h-24 md:h-32 bg-white/60 backdrop-blur-md" />
      <FaLeaf className="absolute top-8 left-8 text-green-200 text-5xl opacity-30" />
      <FaUtensils className="absolute top-12 right-12 text-orange-200 text-6xl opacity-20" />
    </div>
    {/* Avatar & Info */}
    <div className="w-full flex flex-col items-center -mt-20 md:-mt-28 z-10 relative">
      <div className={`w-36 h-36 rounded-full border-4 border-orange-100 mb-4 shadow-lg bg-gray-200 flex items-center justify-center ${shimmer}`}> 
        <FaUserCircle className="text-gray-300 text-7xl" />
      </div>
      <div className={`h-8 w-40 rounded mb-2 ${shimmer}`} />
      <div className={`h-6 w-64 rounded mb-4 ${shimmer}`} />
      <div className="flex gap-4 mt-4 flex-wrap justify-center">
        <div className={`h-6 w-32 rounded-full ${shimmer}`} />
        <div className={`h-6 w-24 rounded-full ${shimmer}`} />
      </div>
    </div>
    {/* Glassmorphic Card */}
    <div className="w-full max-w-3xl mx-auto z-20 mt-12">
      <div className="rounded-3xl bg-white/70 backdrop-blur-md shadow-2xl border-t-8 border-orange-200 p-8 flex flex-col items-center relative">
        <FaMedal className="absolute -top-8 left-8 text-yellow-300 text-4xl opacity-60" />
        <div className={`h-8 w-48 rounded mb-6 ${shimmer}`} />
        <div className="w-full">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex gap-4 mb-4 items-center">
              <div className={`h-6 w-10 rounded-full ${shimmer} flex items-center justify-center bg-orange-100/60`}>
                <FaUtensils className="text-orange-200 text-lg" />
              </div>
              <div className={`h-6 w-40 rounded ${shimmer}`} />
              <div className={`h-6 w-24 rounded ${shimmer}`} />
              <div className={`h-6 w-24 rounded ${shimmer}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const SkeletonProduct = () => (
  <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-yellow-100">
    <div className="w-full max-w-4xl flex flex-col md:flex-row gap-12 animate-pulse">
      {/* Product Image */}
      <div className={`flex-1 h-96 rounded-2xl relative overflow-hidden shadow-lg bg-gray-200 ${shimmer}`}>
        <FaUtensils className="absolute inset-0 m-auto text-orange-100 text-7xl opacity-30" />
      </div>
      {/* Product Info */}
      <div className="flex-1 flex flex-col gap-6 justify-center">
        <div className={`h-10 w-2/3 rounded ${shimmer}`} />
        <div className={`h-6 w-1/2 rounded ${shimmer}`} />
        <div className={`h-24 w-full rounded ${shimmer}`} />
        <div className={`h-12 w-1/3 rounded ${shimmer}`} />
        <div className={`h-12 w-1/2 rounded ${shimmer}`} />
        <div className="flex gap-4 mt-6">
          <div className={`h-12 w-32 rounded-full ${shimmer} bg-orange-100/60 flex items-center justify-center`}>
            <FaShoppingCart className="text-orange-300 text-2xl" />
          </div>
          <div className={`h-12 w-32 rounded-full ${shimmer} bg-yellow-100/60`} />
        </div>
      </div>
    </div>
  </section>
);

const SkeletonList = () => (
  <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-50 via-white to-orange-50">
    {[...Array(5)].map((_, i) => (
      <div
        key={i}
        className={`w-full max-w-2xl h-20 rounded-xl mb-4 flex items-center gap-4 shadow-md ${shimmer} ${i % 2 === 0 ? "bg-orange-100/60" : "bg-yellow-100/60"}`}
      >
        <div className="h-12 w-12 rounded-full bg-white/60 flex items-center justify-center ml-4">
          <FaUtensils className="text-orange-200 text-xl" />
        </div>
        <div className="h-8 w-2/3 rounded bg-white/40" />
      </div>
    ))}
  </section>
);

const SkeletonLayout = ({ type }) => {
  if (type === "product") return <SkeletonProduct />;
  if (type === "list") return <SkeletonList />;
  return <SkeletonProfile />;
};

SkeletonLayout.propTypes = {
  type: PropTypes.string,
};

export default SkeletonLayout;
