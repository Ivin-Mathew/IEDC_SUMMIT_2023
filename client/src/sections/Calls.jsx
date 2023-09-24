import React from "react";
import CallCard from "../components/callsCard";
import "../assets/css/textBackdrop.css";

function Calls(props) {
  const { title, sectionRef, eventData, eventDescription } = props;

  return (
    <div
      ref={sectionRef}
      className="relative space-y-10 font-dm-sans mt-10  md:w-10/12 w-11/12  flex flex-col"
    >
      <div className="absolute overflow-hidden -z-10 opacity-5 text-[#0597F2] xl:top-[-100px] lg:top-[-70px] md:top-[-20px] hidden-xs top-0 w-full space-y-6 text-center self-center">
        <h1 className="xl:text-[250px] lg:text-[200px] md:text-[150px] sm:text-[120px] whitespace-nowrap font-bold">
          {title}
        </h1>
      </div> 
      <div className="w-full space-y-6 text-center self-center">
        <h1 className="inline font-[700] text-[75px] bg-gradient-to-tr from-[#0597F2] to-[#6F04D9] bg-clip-text text-transparent">
          {title}
        </h1>
        <p className=" font-[400] text-[24px] text-[#676C70]">
          {eventDescription}
        </p>
      </div>
      <div className="flex flex-row flex-wrap justify-evenly">
        {eventData &&
          eventData.length > 0 &&
          eventData.map((ticket, index) => (
            <CallCard
              key={index}
              buttonTitle={ticket.ticketButton}
              eventImg={ticket.ticketImg}
              eventName={ticket.ticketTitle}
              eventDescription={ticket.ticketDescription}
              eventLink={ticket.ticketLink}
            />
          ))}
      </div>
    </div>
  );
}

export default Calls;
