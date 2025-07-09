import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import Error404 from "./pages/404/error404";
import ProtectedLayout from "./shared/ProtectedLayout";
// import ProtectedLayout from "./pages/profile/ProtectedLayout";

function App () {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/cart/:id" element={ <ProductDetails /> } />
          <Route path="/menu" element={ <ShopItems /> } />
          <Route path="/about" element={ <AboutUs /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/cart" element={ <Cart /> } />
          <Route path="/register" element={ <Register /> } />
          <Route path="/profile" element={
            <ProtectedLayout>
              <Profile />
            </ProtectedLayout>
          } />
          <Route path="/success" element={ <Success /> } />
          <Route path="/cancel" element={ <Cancel /> } />
          <Route path="*" element={ <Error404 /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
