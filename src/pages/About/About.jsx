import React, { useState } from "react";

const AboutUsSection = () => {
  const [activeTab, setActiveTab] = useState("Story");

  const tabs = [
    { id: "Story", label: "Story" },
    { id: "Mission", label: "Mission" },
    { id: "Success", label: "Success" },
    { id: "Team", label: "Team & Others" },
  ];

  const tabContents = {
    Story: [
      "We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.",
      "We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.",
      "We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.",
    ],
    Mission: [
      "Our mission is to revolutionize the logistics industry through innovative tracking solutions and unmatched speed.",
      "We aim to connect people and businesses seamlessly, ensuring every parcel is delivered with care and accuracy.",
    ],
    Success: [
      "With thousands of daily successful deliveries and high customer satisfaction rates, we continue to grow rapidly.",
      "Recognized as one of the most reliable parcel delivery services in the region.",
    ],
    Team: [
      "Our team consists of dedicated professionals working around the clock to streamline your delivery experience.",
      "From support agents to field couriers, everyone shares a common goal — excellence in service.",
    ],
  };

  return (
    <section className="bg-[#FFF3F3] py-16 px-4 md:px-12 lg:px-24 mt-5 rounded-3xl">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-10 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#112D32] tracking-tight mb-4">
            About Us
          </h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center gap-6 md:gap-10 border-b border-transparent pb-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-xl md:text-2xl font-bold transition-colors duration-200 cursor-pointer ${
                activeTab === tab.id
                  ? "text-[#112D32]"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Paragraphs */}
        <div className="space-y-6 max-w-5xl text-gray-700 text-sm md:text-base leading-relaxed">
          {tabContents[activeTab]?.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
