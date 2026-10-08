import React from "react";
import { FaTruck, FaBoxOpen, FaUndo } from "react-icons/fa";

const OurServices = () => {
  const services = [
    {
      id: 1,
      title: "Express & Standard Delivery",
      description:
        "We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi.",
      icon: <FaTruck />,
    },
    {
      id: 2,
      title: "Nationwide Delivery",
      description:
        "We deliver parcels nationwide with home delivery in every district.",
      icon: <FaTruck />,
      active: true,
    },
    {
      id: 3,
      title: "Fulfillment Solution",
      description:
        "We offer customized service with inventory management support, order processing, packaging, and after sales support.",
      icon: <FaBoxOpen />,
    },
    {
      id: 4,
      title: "Cash on Home Delivery",
      description:
        "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
      icon: <FaTruck />,
    },
    {
      id: 5,
      title: "Corporate Service / Contract In Logistics",
      description:
        "Customized corporate logistics service including warehouse and inventory management support.",
      icon: <FaTruck />,
    },
    {
      id: 6,
      title: "Parcel Return",
      description:
        "Through our reverse logistics facility we allow end customers to return or exchange their products.",
      icon: <FaUndo />,
    },
  ];

  return (
    <section className=" mx-auto bg-[#03373D] rounded-[16px] px-6 py-10 md:px-10 md:py-12 mt-[100px]">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-[32px] font-extrabold text-white">Our Services</h2>

        <p className="text-sm text-gray-300 max-w-[650px] mx-auto mt-3">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 cursor-pointer">
        {services.map((service) => (
          <div
            key={service.id}
            className={`rounded-[12px] p-6 min-h-[170px] text-center ${
              service.active ? "bg-[#CAEB66]" : "bg-[#FFECEC]"
            }`}
          >
            {/* Icon */}
            <div className="flex justify-center mb-3">
              <div className="w-[48px] h-[48px] rounded-full bg-white/70 flex items-center justify-center">
                <span className="text-[#03373D] text-xl">{service.icon}</span>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-[#03373D]">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-xs font-medium text-[#606060] mt-2 leading-5">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
