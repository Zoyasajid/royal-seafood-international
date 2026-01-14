import React from "react";
import { Button } from "antd";
import { CheckCircleOutlined, ArrowRightOutlined } from "@ant-design/icons";
import CEOAvatar from "@/../public/images/ceo-avatar.png";
import AboutUSImage_1 from "@/../public/images/about-us-1.jpeg";
import AboutUSImage_2 from "@/../public/images/about-us-2.jpeg";
import Image from "next/image";
const aboutData = {
  experienceYears: "7+",
  heading: "Work as a Foregin Buyer's local Agent",
  description:
    "Royal seafood international is a seafood consulting firm that facilitates the buying process of seafood from Bangladesh, India and Vietnam. Since 2019, we are working as  foreign buyer’s local agent by sourcing the best quality seafood for importers, wholesalers and supermarkets all over the globe. Our practice is overseen by a team of highly specialized professionals who ensure the delivery of high quality products on time and at volume discount prices.",
  features: [
    "Acts as fpreign uyer's local agent",
    "Pre shipment inspection all the time",
    "Provides best quality shimps at best price",
    "Provide information about local market",
    "Negotiate the price on behlaf of the clients",
    "Strictly superwise and moniter all the process until shipment",
  ],
  ceo: {
    name: "Jane Cooper",
    role: "Our CEO",
    quote: "Let's continue to dream big, act boldly - Thank you.",
    statement:
      "It's an honor to stand before you today as we reflect on our journey and envision the path ahead.",
    image: CEOAvatar,
  },
  images: {
    mainWorker:AboutUSImage_1 ,
    detailView: AboutUSImage_2,
  },
};
const AboutSection = () => {
  return (
    <section className=" py-16 font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative flex gap-4 h-full">
          <div className="absolute top-0 right-10 z-10 bg-white p-6 shadow-xl border-l-4 w-56">
            <h2 className="text-4xl font-bold leading-none text-primary">
              {aboutData.experienceYears}
            </h2>
            <p className="text-gray-600 font-semibold text-sm mt-1">
              Years of experience
            </p>
          </div>

          <div className="w-1/2 relative rounded-sm overflow-hidden hadow-sm">
            <Image
              src={aboutData.images.detailView}
              alt="Cleaning Service"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-1/2 pt-20">
            <div className="h-full rounded-sm overflow-hidden  shadow-sm">
              <Image
                src={aboutData.images.mainWorker}
                alt="Cleaning Detail"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="absolute top-0 right-0 opacity-20 -mr-10">
            <img src="/plane-path.svg" alt="decoration" className="w-24" />
          </div>
        </div>

        <div className="flex flex-col space-y-3">
          <div className=" text-primary font-bold uppercase tracking-wider text-base ">
         
            About Us
          </div>

          <h1 className="text-4xl font-extrabold text-black leading-tight">
            {aboutData.heading}
          </h1>

          <p className="text-gray-500 leading-relaxed text-base">
            {aboutData.description}
          </p>

          <div className="p-6 rounded-lg border border-gray-100 flex items-start gap-4">
          
               <Image
                src={CEOAvatar}
                alt="ceo avatar"
                width={80}
                height={80}
                className="object-cover transition duration-500 group-hover:scale-105 rounded-full"
              />
           
            <div>
              <h4 className="font-bold text-[#002147]">
                Inspiring Growth and Innovation
                
              </h4>
              <p className="text-gray-500 text-sm italic mb-2">
                "{aboutData.ceo.statement}"
              </p>
              <p className="text-sm">
                <span className="font-bold text-primary">
                  {aboutData.ceo.role}
                </span>
                <span className="font-bold ml-1 text-primary">
                  {aboutData.ceo.name}
                </span>
              </p>
              <p className="text-xs text-gray-400 mt-1">
                {aboutData.ceo.quote}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {aboutData.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-2  font-medium"
              >
                <CheckCircleOutlined className="text-lg mt-2" style={{color:"var(--color-primary)"}} />
                <span className="text-gray-500">{feature}</span>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <button
              className="bg-primary h-14 px-10 rounded-md font-bold text-sm uppercase flex items-center gap-2"
            >
              Read More <ArrowRightOutlined />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
