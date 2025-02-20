


import React, { useEffect } from "react";
import Service1 from "../assets/ServicesImage/service-1.png";
import Service2 from '../assets/ServicesImage/service-2.png';
import Service3 from "../assets/ServicesImage/service-3.png";
import Service4 from "../assets/ServicesImage/service-4.png";
import Service5 from "../assets/ServicesImage/service-5.png";
import Service6 from "../assets/ServicesImage/service-6.png";
import Service7 from "../assets/ServicesImage/service-7.png";
import "../CSS/one.css"
import { FaUser } from "react-icons/fa";

const services = [

  {
    id: 1,
    image: Service1,
    icon: <FaUser />,
    title: "UI-UX Design",
    description:
      "As an agency our UI/UX teams focus on creating, visually appealing and user-friendly interfaces that significantly enhance engagement and user satisfaction. By focusing on intuitive design elements, we help create seamless experiences that keep users engaged.",
  },
  {
    id: 2,
    image: Service2,
    icon: <FaUser />,
    title: "Mobile Apps",
    description:
      "As an agency our UI/UX teams focus on creating, visually appealing and user-friendly interfaces that significantly enhance engagement and user satisfaction. By focusing on intuitive design elements, we help create seamless experiences that keep users engaged.",
  },
  {
    id: 3,
    image: Service3,
    icon: <FaUser />,
    title: "Backend Development",
    description:
      "As an agency our UI/UX teams focus on creating, visually appealing and user-friendly interfaces that significantly enhance engagement and user satisfaction. By focusing on intuitive design elements, we help create seamless experiences that keep users engaged.",
  },
  {
    id: 4,
    image: Service4,
    icon: <FaUser />,
    title: "Frontend Development",
    description:
      "As an agency our UI/UX teams focus on creating, visually appealing and user-friendly interfaces that significantly enhance engagement and user satisfaction. By focusing on intuitive design elements, we help create seamless experiences that keep users engaged.",
  },
  {
    id: 5,
    image: Service5,
    icon: <FaUser />,
    title: "Artificial Intelligence",
    description:
      "As an agency our UI/UX teams focus on creating, visually appealing and user-friendly interfaces that significantly enhance engagement and user satisfaction. By focusing on intuitive design elements, we help create seamless experiences that keep users engaged.",
  },
  {
    id: 6,
    image: Service6,
    icon: <FaUser />,
    title: "Data Analysis & Data Science",
    description:
      "As an agency our UI/UX teams focus on creating, visually appealing and user-friendly interfaces that significantly enhance engagement and user satisfaction. By focusing on intuitive design elements, we help create seamless experiences that keep users engaged.",
  },
  {
    id: 7,
    image: Service7,
    icon: <FaUser />,
    title: "Managed Cloud & DevOps",
    description:
      "As an agency our UI/UX teams focus on creating, visually appealing and user-friendly interfaces that significantly enhance engagement and user satisfaction. By focusing on intuitive design elements, we help create seamless experiences that keep users engaged.",
  },
];

const OurServices = () => {
  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll(".service-card");
      const stickyImages = document.querySelectorAll(".serviceImg");
      const windowHeight = window.innerHeight;

      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();

        // Check if the card is in the center of the viewport
        if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
          card.style.opacity = "1";
          if (stickyImages[index]) {
            stickyImages[index].classList.add("active-img");
            stickyImages[index].style.opacity = "1";
            stickyImages[index].style.transform = "translate(-50%, -30%) scale(1)";
          }
        } else {
          card.style.opacity = "0.2";
          if (stickyImages[index]) {
            stickyImages[index].classList.remove("active-img");
            stickyImages[index].style.opacity = "0";
            stickyImages[index].style.transform = "translate(-60%, -50%) scale(0.7)";
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className=" bg-(--darkblack) text-(--whitelight) py-40">
      <div className="max-w-[1400px] mx-auto px-10">
        <h2 className="text-center text-5xl font-bold">Our Services</h2>
        <div className="flex ">

          <div className="w-1/2 pr-40  mt-24 ">
            {services.map((service) => (
              <div
                key={service.id}
                className="service-card opacity-30 transition-opacity duration-300 mt-60 first:mt-0"
              >
                <div className="flex justify-start items-center gap-3">
                  <div className="w-[40px] h-[40px] bg-gradient-to-r from-(--blue) to-(--green) rounded-full translate-y-2 mr-1">
                    <span className="inline-block ml-2 mt-2   text-2xl"> {service.icon}</span>
                  </div>
                  <h3 className="text-3xl font-bold mt-4 ">
                    {service.title}
                  </h3>
                </div>
                <p className="text-md mt-9 text-(--white) leading-8">
                  {service.description}
                </p>
                <div className="flex flex-wrap mt-10">
                  {[
                    "Branding",
                    "Logo Design",
                    "Packaging",
                    "UI/UX Design",
                    "Print Media",
                    "Advertisement",
                  ].map((btn, i) => (
                    <div
                      className="custom-gradient rounded-full px-6 py-2 mt-2.5 mr-2.5 "
                     
                
                    >
                      {btn}
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>


          <div className="w-1/2  relative  ">
            <div className="sticky top-96 h-96 pl-36">
              {services.map((serviceimg, index) => (
                <img
                  key={serviceimg.id}
                  src={serviceimg.image}
                  alt={serviceimg.title}
                  className="serviceImg absolute left- max-w-[100%] h-auto opacity-0 scale-70 transition-all duration-200"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;



