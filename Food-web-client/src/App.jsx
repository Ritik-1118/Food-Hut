import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "sonner";
import "./App.css";
import Home from "./pages/home/home";
import Navbar from "./shared/navbar";
import ProductDetails from "./pages/product/ProductDetails";
import AboutUs from "./pages/about/AboutUs";
import ShopItems from "./pages/menu/menu";
import Footer from "./shared/footer";
import Login from "./pages/registration/login";
import Cart from "./pages/cart/cart";
import Register from "./pages/registration/register";
import Profile from "./pages/profile/profile";
import Success from "./pages/paymentResult/success";
import Cancel from "./pages/paymentResult/cancel";
import Error404 from "./pages/404/Error404";
import ProtectedLayout from "./shared/ProtectedLayout";
import PageWrapper from "./shared/PageWrapper";

// Animated routes wrapper — gives AnimatePresence access to location
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={ location } key={ location.pathname }>
        <Route path="/" element={ <PageWrapper><Home /></PageWrapper> } />
        <Route path="/cart/:id" element={ <PageWrapper><ProductDetails /></PageWrapper> } />
        <Route path="/menu" element={ <PageWrapper><ShopItems /></PageWrapper> } />
        <Route path="/about" element={ <PageWrapper><AboutUs /></PageWrapper> } />
        <Route path="/login" element={ <PageWrapper><Login /></PageWrapper> } />
        <Route path="/cart" element={ <PageWrapper><Cart /></PageWrapper> } />
        <Route path="/register" element={ <PageWrapper><Register /></PageWrapper> } />
        <Route path="/profile" element={
          <ProtectedLayout>
            <PageWrapper><Profile /></PageWrapper>
          </ProtectedLayout>
        } />
        <Route path="/success" element={ <PageWrapper><Success /></PageWrapper> } />
        <Route path="/cancel" element={ <PageWrapper><Cancel /></PageWrapper> } />
        <Route path="*" element={ <PageWrapper><Error404 /></PageWrapper> } />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      {/* Global toast provider — single instance for the entire app */}
      <Toaster
        position="top-center"
        richColors
        toastOptions={ {
          duration: 3000,
          style: { fontFamily: '"DM Sans", system-ui, sans-serif' },
        } }
      />
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
