// import { Route, Router } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "@material-tailwind/react/tailwind.css";
import Header from "./view/Landing/Home/header";
import Home from "./view/Landing/Home/home";
import Product from "./view/Landing/Home/product";
import Banner from "./view/Landing/Home/banner";
import Testimonials from "./view/Landing/Home/testimonials";
import AppStore from "./view/Landing/Home/appStore";
import Footer from "./view/Landing/Home/footer";
import { ThemeProvider } from "@material-tailwind/react";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
  });
  return (
    <ThemeProvider>
      <Header />
      <Home />
      <Product />
      <Banner />
      <AppStore />
      <Testimonials />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
