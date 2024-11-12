import Header from "./components/1.Header/header";
import Footer from "./components/10.Footer/footer";
import Hero from "./components/2.Hero/hero";
import Brands from "./components/3.Brands/brand";
import Features from "./components/4.Features/features";
import Info from "./components/5.Info/info";
import Facedetail from "./components/6.Factdetail/facedetail";
import Reviews from "./components/7.Reviews/reviews";
import Faq from "./components/8.Faq/faq";
import Subscribe from "./components/9.Subscribe/subscribe";
import "./globals.css";


export default function Home() {
  return (
    <>
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
