import Header from "./components/1.Header/Header";
import Footer from "./components/10.Footer/Footer";
import Hero from "./components/2.Hero/Hero";
import Brands from "./components/3.Brands/Brand";
import Features from "./components/4.Features/Features";
import Info from "./components/5.Info/Info";
import Facedetail from "./components/6.Factdetail/Facedetail";
import StarRating from "./components/7.Reviews/components/StarRating";
import Reviews from "./components/7.Reviews/Reviews";
import Faq from "./components/8.Faq/Faq";
import Subscribe from "./components/9.Subscribe/Subscribe";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default function Home() {
  return (
    <>
    < StarRating />
    < Header />
    < Hero />
    < Brands />
    < Features />
    < Info />
    < Facedetail />
    < Reviews />
    < Faq />
    < Subscribe />
    < Footer />
    </>
  );
};
