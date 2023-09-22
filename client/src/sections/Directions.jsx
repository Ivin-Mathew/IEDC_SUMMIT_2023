import React, { useState } from "react";

import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "600px",
  height: "400px",
  borderRadius: "10px",
  boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.1)",
};

const center = {
  lat: 8.546137753741851,
  lng: 76.90639433950193,
};

const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const App = ({ sectionRef }) => {
  const [activeLink, setActiveLink] = useState("TVC");
  const [content, setContent] = useState("TVC");

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setContent(link);
  };

  return (
    <div ref={sectionRef} className=" w-10/12 my-20">
      <h1 className="font-medium md:font-[500] font-darker-grotesque text-5xl md:text-[60px]">Get Directions to the event</h1>
      <div className="flex flex-col mt-20 space-x-3 w-full space-y-10 custom2:flex-row">
        <div className="Maps w-full m-auto flex items-center justify-center">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15782.081640228585!2d76.9063407!3d8.5458513!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05bec79541c519%3A0x98324eb5aafb3778!2sCollege%20of%20Engineering%20Trivandrum%20(CET)!5e0!3m2!1sen!2sin!4v1693841860889!5m2!1sen!2sin" 
          width="600" 
          height="450"
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
          {/* <LoadScript googleMapsApiKey={apiKey}>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={17}
            >
              <Marker position={center} />
            </GoogleMap>
          </LoadScript> */}
        </div>
        <div className="flex flex-col p-0 w-full overflow-x-auto custom2:p-12">
          <nav>
            <div className="border-b-2 container mx-auto ml-0 flex">
              <div className="space-x-4 items-start text-4xl flex flex-wrap flex-row  font-darker-grotesque font-semibold custom1:flex-row custom2:flex-col custom2:items-center custom1:items-start">
                <button
                  onClick={() => handleLinkClick("TVC")}
                  className={`nav-link  ml-0 custom2:ml-4 custom1:ml-0 ${
                    activeLink === "TVC"
                      ? "text-[#3866F2] border-b-2 border-[#3866F2]"
                      : "text-[#858585]"
                  }`}
                >
                  TVC
                </button>
                <button
                  onClick={() => handleLinkClick("Kochuveli")}
                  className={`nav-link ${
                    activeLink === "Kochuveli"
                      ? "text-[#3866F2] border-b-2 border-[#3866F2]"
                      : "text-[#858585]"
                  }`}
                >
                  Kochuveli
                </button>
                <button
                  onClick={() => handleLinkClick("Petta")}
                  className={`nav-link ${
                    activeLink === "Petta"
                      ? "text-[#3866F2] border-b-2 border-[#3866F2]"
                      : "text-[#858585]"
                  }`}
                >
                  Pettah
                </button>
              </div>
            </div>
          </nav>
          <div className="container mx-auto">
            {content === "TVC" && (
              <div>
                <div className="font-semibold mt-4 text-4xl text-[#000000] font-darker-grotesque">
                  Trivandrum Central to CET
                </div>
                <h2 className="mt-11 text-2xl font-semibold text-[#000000] font-darker-grotesque">
                  Via Bus
                </h2>
                <p className="font-semibold pr-12 text-xl text-[#605D5D] font-darker-grotesque">
                  Trivandrum Central Railway Station - Trivandrum Bus Stand
                  (Board Chavadimukku bus) - Chavadimukku Junction Stop (Final
                  Stop) - CET
                </p>
              </div>
            )}
            {content === "Kochuveli" && (
              <div>
                <div className="font-semibold mt-4 text-4xl text-[#000000] font-darker-grotesque">
                  Kochuveli to CET
                </div>
                <h2 className="mt-11 text-2xl font-semibold text-[#000000] font-darker-grotesque">
                  Via Bus
                </h2>
                <p className="font-semibold pr-12 text-xl text-[#605D5D] font-darker-grotesque">
                  Kochuveli Railway Station - Anayara bus stop (Board
                  Chavadimukku bus) - Chavadimukku Junction Stop (Final Stop) -
                  CET
                </p>
              </div>
            )}
            {content === "Petta" && (
              <div>
                <div className="font-semibold mt-4 text-4xl text-[#000000] font-darker-grotesque">
                  Petta to CET
                </div>
                <h2 className="mt-11 text-2xl font-semibold text-[#000000] font-darker-grotesque">
                  Via Bus
                </h2>
                <p className="font-semibold pr-12 text-xl text-[#605D5D] font-darker-grotesque">
                  Pettah Railway Station - Pettah bus stop (Board Chavadimukku
                  bus) - Chavadimukku Junction Stop (Final Stop) - CET
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
