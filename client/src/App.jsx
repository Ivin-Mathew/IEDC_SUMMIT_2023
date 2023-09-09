// import Schedule from "./sections/Schedule";
// import Speakers from "./sections/Speakers";
// import Events from "./sections/Events";
import Calls from "./sections/Calls";
import LandingPage from "./sections/landingPage";
import AboutSummit from "./sections/AboutSummit";
import IedcCircle from "./components/IedcCircle";
import About from "./sections/About";
import Footer from "./sections/Footer";
import Directions from "./sections/Directions";
import PrevSummut from "./sections/prevSummits";
import { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import { joinUs } from "./data.js";
import LoadingScreen from "./sections/loadingScreen";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);

  const homeSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const speakersSectionRef = useRef(null);
  const eventsSectionRef = useRef(null);
  const venueSectionRef = useRef(null);
  console.log(Calls);
  const navbarItems = [
    { text: "HOME", href: "#", sectionRef: homeSectionRef },
    { text: "ABOUT", href: "#about", sectionRef: aboutSectionRef },
    //{ text: "", href: "#speakers", sectionRef: speakersSectionRef },
    //{ text: "EVENTS", href: "#events", sectionRef: eventsSectionRef },
    { text: "VENUE", href: "#venue", sectionRef: venueSectionRef },
  ];
  return (
    <div className="flex flex-col justify-center items-center overflow-hidden">
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <Navbar navbarItems={navbarItems} />
          <LandingPage sectionRef={homeSectionRef} />
          <AboutSummit sectionRef={aboutSectionRef} />
          <IedcCircle />
          <loadingScreen></loadingScreen>
          <Calls
            title="Join Us"
            button="Apply Now"
            eventData={joinUs}
            sectionRef={eventsSectionRef}
            eventDescrition=""
          />
          <PrevSummut />
          <About />
          <Directions sectionRef={venueSectionRef} />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
