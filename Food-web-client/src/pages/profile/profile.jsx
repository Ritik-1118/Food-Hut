import { useEffect } from "react";
import { useAuth } from "../../store/auth";
import { Navigate } from "react-router-dom";
import SkeletonLayout from "../../shared/SkeletonLayout";
import { FaUserCircle, FaEnvelope, FaReceipt, FaMedal, FaCalendarAlt, FaCheckCircle, FaClock } from "react-icons/fa";

const Profile = () => {
  const { userData, isLoading, islogin } = useAuth();
  const { userdata, payments } = userData || {};
  const { username, email, createdAt } = userdata || {};

  useEffect( () => {
    localStorage.setItem( "userData", JSON.stringify( userData ) );
  }, [ userData ] );

  if (isLoading) return <SkeletonLayout type="profile" />;
  if ( !islogin ) return <Navigate to="/login" />;

  // Dummy stats for badges
  const orderCount = payments ? payments.length : 0;
  const memberSince = createdAt ? new Date( createdAt ).getFullYear() : "2024";

  return (
    <section className="min-h-screen w-full bg-white relative overflow-x-hidden pb-16">
      {/* Hero Banner */ }
      <div className="relative w-full h-56 md:h-64 bg-gradient-to-br from-[#07c8cb] via-[#0b7c90] to-[#d15b37]/80 flex items-end justify-center">
        {/* Wavy SVG */ }
        <svg className="absolute bottom-0 left-0 w-full h-24 md:h-32" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#fff" fillOpacity="1" d="M0,224L60,202.7C120,181,240,139,360,154.7C480,171,600,245,720,245.3C840,245,960,171,1080,133.3C1200,96,1320,96,1380,96L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
        </svg>
        {/* Food watermark */ }
        <div className="absolute inset-0 bg-[url('/banner1.png')] bg-contain bg-no-repeat bg-right-bottom opacity-10 pointer-events-none" />
      </div>
      {/* Overlapping Avatar */ }
      <div className="w-full flex flex-col items-center -mt-20 md:-mt-28 z-10 relative">
        <div className="relative">
          <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-[#07c8cb] via-[#0b7c90] to-[#d15b37] opacity-40 blur-xl animate-pulse" />
          <FaUserCircle className="w-36 h-36 text-white drop-shadow-2xl z-10 relative bg-gradient-to-br from-[#07c8cb] to-[#09596c] rounded-full p-2" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#09596c] drop-shadow-lg mt-4 flex items-center gap-2">
          { username || "User" }
        </h1>
        <div className="flex items-center gap-2 text-lg text-[#0b7c90] font-semibold mt-2">
          <FaEnvelope className="text-[#07c8cb]" />
          { email || "-" }
        </div>
        {/* Badges Row */ }
        <div className="flex gap-4 mt-4 flex-wrap justify-center">
          <span className="flex items-center gap-2 bg-[#07c8cb]/20 text-[#07c8cb] px-4 py-1 rounded-full font-semibold text-sm">
            <FaCalendarAlt /> Member since { memberSince }
          </span>
          <span className="flex items-center gap-2 bg-[#d15b37]/20 text-[#d15b37] px-4 py-1 rounded-full font-semibold text-sm">
            <FaMedal /> { orderCount } Orders
          </span>
          { orderCount > 10 && (
            <span className="flex items-center gap-2 bg-[#0b7c90]/20 text-[#0b7c90] px-4 py-1 rounded-full font-semibold text-sm">
              <FaMedal /> VIP
            </span>
          ) }
        </div>
      </div>
      {/* Floating Glassmorphic Card for Payment History */ }
      <div className="w-full max-w-3xl mx-auto z-20 mt-12">
        <div className="rounded-3xl bg-white/80 backdrop-blur-md shadow-2xl border-t-8 border-[#d15b37] p-8 flex flex-col items-center">
          <div className="flex items-center gap-3 mb-6">
            <FaReceipt className="text-2xl text-[#d15b37]" />
            <h3 className="text-2xl font-bold text-[#d15b37]">Payment History</h3>
          </div>
          { Array.isArray( payments ) && payments.length > 0 ? (
            <div className="block w-full overflow-x-auto">
              <table className="w-full border-collapse rounded-xl overflow-hidden shadow-md">
                <thead>
                  <tr className="bg-[#d15b37]/20">
                    <th className="px-4 py-2 text-[#0b7c90] text-xs uppercase font-bold">Transaction Id</th>
                    <th className="px-4 py-2 text-[#0b7c90] text-xs uppercase font-bold">Amount ($)</th>
                    <th className="px-4 py-2 text-[#0b7c90] text-xs uppercase font-bold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  { payments.map( ( payment, index ) => (
                    <tr key={ index } className="even:bg-[#07c8cb]/10">
                      <td className="px-4 py-2 text-[#09596c] text-sm">{ payment.razorpay_payment_id || "-" }</td>
                      <td className="px-4 py-2 text-[#09596c] text-sm">{ payment.amount ? `$${payment.amount}` : "-" }</td>
                      <td className="px-4 py-2 text-[#09596c] text-sm flex items-center gap-2">
                        { payment.status === "success" ? (
                          <FaCheckCircle className="text-green-500" />
                        ) : (
                          <FaClock className="text-yellow-500" />
                        ) }
                        { payment.status || "-" }
                      </td>
                    </tr>
                  ) ) }
                </tbody>
              </table>
            </div>
          ) : (
            <div className="flex justify-center text-[#0b7c90] font-semibold py-8">
              No transactions available
            </div>
          ) }
        </div>
      </div>
      {/* Decorative Food Accent (bottom right) */ }
      <div className="hidden md:block absolute bottom-0 right-0 w-64 h-64 bg-[url('/banner1.png')] bg-contain bg-no-repeat bg-bottom opacity-20 pointer-events-none z-0" />
      {/* Decorative Food Accent (top left) */ }
      <div className="hidden md:block absolute top-0 left-0 w-64 h-64 bg-[url('/banner.png')] bg-contain bg-no-repeat bg-top opacity-10 pointer-events-none z-0" />
    </section>
  );
};

export default Profile;
