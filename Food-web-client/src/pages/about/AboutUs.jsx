import { FaDotCircle } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaSquarePhoneFlip } from "react-icons/fa6";

const AboutUs = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-cyan-100 pt-[14vh] pb-[10vh] px-4 flex flex-col items-center">
      <div className="w-full max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-extrabold text-cyan-800 mb-2 drop-shadow-lg">About Us</h1>
          <div className="flex justify-center">
            <hr className="border-2 w-32 border-cyan-800 rounded-full" />
          </div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Welcome to <span className="text-orange-600 font-bold">FoodHunt</span> – your go-to destination for delicious food, fast delivery, and a delightful experience. Discover why thousands trust us for their daily cravings!
          </p>
        </div>

        {/* Why Us & Partners */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Why Us */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border-t-8 border-cyan-400 hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <FaDotCircle className="text-cyan-700 text-2xl mr-2" />
              <h2 className="text-2xl font-bold text-orange-600">Why Choose Us?</h2>
            </div>
            <ul className="list-disc ml-6 text-gray-700 space-y-2">
              <li>Fresh, high-quality ingredients in every meal</li>
              <li>Lightning-fast delivery to your doorstep</li>
              <li>Wide variety of cuisines and dishes</li>
              <li>Easy-to-use app and seamless ordering</li>
              <li>24/7 customer support</li>
            </ul>
          </div>
          {/* Partners */}
          <div className="bg-white rounded-3xl shadow-xl p-8 border-t-8 border-orange-400 hover:scale-105 transition-transform duration-300 flex flex-col items-center">
            <div className="flex items-center mb-4">
              <FaDotCircle className="text-cyan-700 text-2xl mr-2" />
              <h2 className="text-2xl font-bold text-orange-600">Our Partners</h2>
            </div>
            <img
              src="/img/about/partners.png"
              alt="Partners"
              className="h-24 object-contain mb-2 drop-shadow-md"
            />
            <p className="text-gray-600 text-center mt-2">We collaborate with top brands and local favorites to bring you the best food experience.</p>
          </div>
        </div>

        {/* Follow Us & Contact Info */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Follow Us */}
          <div className="bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-3xl shadow-lg p-8 flex flex-col items-center border-b-8 border-cyan-300">
            <div className="flex items-center mb-4">
              <FaDotCircle className="text-cyan-700 text-2xl mr-2" />
              <h2 className="text-2xl font-bold text-orange-600">Follow Us!</h2>
            </div>
            <p className="text-gray-700 text-center mb-4">
              Stay connected for the latest offers, new arrivals, and food inspiration!
            </p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="bg-cyan-700 hover:bg-cyan-800 text-white rounded-full p-3 shadow-md transition-colors duration-200" aria-label="Instagram">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 0A5.75 5.75 0 0 0 2 7.75m0 8.5A5.75 5.75 0 0 0 7.75 22m8.5 0A5.75 5.75 0 0 0 22 16.25m0-8.5A5.75 5.75 0 0 0 16.25 2M12 7.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zm5.25-1.25h.01" /></svg>
              </a>
              <a href="#" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full p-3 shadow-md transition-colors duration-200" aria-label="Twitter">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 4.01c-.77.35-1.6.59-2.47.7a4.15 4.15 0 0 0 1.82-2.29 8.3 8.3 0 0 1-2.62 1A4.14 4.14 0 0 0 12 8.13c0 .32.04.64.1.94A11.75 11.75 0 0 1 3.1 3.1a4.13 4.13 0 0 0 1.28 5.52c-.7-.02-1.36-.22-1.94-.54v.05a4.14 4.14 0 0 0 3.32 4.06c-.32.09-.66.14-1.01.14-.25 0-.48-.02-.71-.07a4.15 4.15 0 0 0 3.87 2.88A8.32 8.32 0 0 1 2 19.54a11.75 11.75 0 0 0 6.29 1.84c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.54A8.18 8.18 0 0 0 22 4.01z" /></svg>
              </a>
              <a href="#" className="bg-cyan-700 hover:bg-cyan-800 text-white rounded-full p-3 shadow-md transition-colors duration-200" aria-label="Facebook">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 2h-3a6 6 0 0 0-6 6v3H5v4h4v8h4v-8h3l1-4h-4V8a2 2 0 0 1 2-2h2z" /></svg>
              </a>
            </div>
          </div>
          {/* Contact Info */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl shadow-lg p-8 border-b-8 border-orange-300">
            <div className="flex items-center mb-4">
              <FaDotCircle className="text-cyan-700 text-2xl mr-2" />
              <h2 className="text-2xl font-bold text-orange-600">Contact Info</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-center gap-3">
                <IoHome className="text-cyan-800 text-xl" />
                <span>India, Delhi</span>
              </div>
              <div className="flex items-center gap-3">
                <IoIosMail className="text-cyan-800 text-xl" />
                <span>contact@foodhunt.com</span>
              </div>
              <div className="flex items-center gap-3">
                <FaSquarePhoneFlip className="text-cyan-800 text-xl" />
                <span>+91 9312847473, +91 9312847474</span>
              </div>
            </div>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="mt-16 bg-white/80 rounded-3xl shadow-xl p-10 border-l-8 border-cyan-200 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-cyan-800 mb-4 flex items-center gap-2">
            <FaDotCircle className="text-orange-500" /> Our Story
          </h2>
          <p className="text-gray-700 text-lg text-center max-w-3xl">
            Founded in 2024, <span className="text-orange-600 font-bold">FoodHunt</span> started with a simple mission: to make great food accessible to everyone, everywhere. From humble beginnings, we&apos;ve grown into a trusted platform serving thousands of happy customers every day. Our passion for food and technology drives us to innovate and deliver the best experience possible.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
