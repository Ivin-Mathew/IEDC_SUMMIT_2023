// import Schedule from "./sections/Schedule";
import Events from "../sections/Events";
import Calls from "../sections/Calls";
import LandingPage from "../sections/landingPage";
import AboutSummit from "../sections/AboutSummit";
import IedcCircle from "../components/IedcCircle";
import About from "../sections/About";
import Footer from "../sections/Footer";
import Directions from "../sections/Directions";
import PrevSummut from "../sections/prevSummits";
import { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import { faqData } from "../data";
import LoadingScreen from "../sections/loadingScreen";
import FAQ from "../sections/FAQ";
import Speakers from "../sections/Speakers";
import {client,getData,urlToImage} from "../../sanityConfig.js";

async function getEvents() {
  const speakers = await client.fetch('*[_type == "event"]')
  return speakers
}

async function getCalls() {
  const calls = await client.fetch('*[_type == "call"]')
  return calls
}

function mainPage() {
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState([])
  const [calls, setCalls] = useState([])
  const [speakers, setSpeakers] = useState([]);
  useEffect(() => {
    setLoading(true);
    getData('*[_type == "speaker"] | order(order asc)')
      .then((data) => {
        setSpeakers(data);
        return data;
      })
      .then((data) => urlToImage(data))
      .then(() => setLoading(false))
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, []);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
    getEvents().then((Events) => setEvents(Events))
    getCalls().then((calls) => setCalls(calls))
  }, []);

  const homeSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const speakersSectionRef = useRef(null);
  const eventsSectionRef = useRef(null);
  const venueSectionRef = useRef(null);
  const navbarItems = [
    { text: "HOME", href: "#", sectionRef: homeSectionRef },
    { text: "ABOUT", href: "#about", sectionRef: aboutSectionRef },
    { text: "SPEAKERS", href: "#speakers", sectionRef: speakersSectionRef },
    { text: "EVENTS", href: "#events", sectionRef: eventsSectionRef },
    { text: "VENUE", href: "#venue", sectionRef: venueSectionRef },
  ];
  return (
    <div className="flex flex-col justify-center items-center overflow-hidden bg-zinc-50">
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <Navbar navbarItems={navbarItems} />
          <LandingPage sectionRef={homeSectionRef} />
          <AboutSummit sectionRef={aboutSectionRef} />
          <IedcCircle />
          <loadingScreen/>
          <Events
            title="Events"
            button="Register Now"
            eventData={events}
            sectionRef={eventsSectionRef}
            eventDescrition=""
          />
          <Speakers sectionRef={speakersSectionRef} speakersData={speakers} />
          <Calls title="Join Us" eventData={calls} eventDescrition="" />
          <PrevSummut />
          <About />
          <Directions sectionRef={venueSectionRef} />
          <FAQ faqData={faqData} />
          <Footer />
        </>
      )}
    </div>
  );
}

export default mainPage;
