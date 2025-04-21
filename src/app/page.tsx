import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import HeroSection from "./homepage/HeroSection_Video";
import WhyAceSection from "./homepage/WhyAceSection";
import Industries from "./homepage/Industries";
import CourcesList from "./homepage/CourceSection";
import Principal from "./homepage/Principal";
import Epoch from "./homepage/epoch";
import NewsAndUpdates from "./homepage/NewsAndUpdates";
import CollageActivity from "./homepage/CollageActivity";


export default function Home() {
  return (<div className="select-none overflow-x-hidden bg-slate-50">
    {/* <NavBar /> */}
    <HeroSection />
    <WhyAceSection />
    <CourcesList />
    <CollageActivity />

    <Epoch />
    <Principal />
    <Industries />
    <NewsAndUpdates />
    <Footer />

  </div>
  );
}
