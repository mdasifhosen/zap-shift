import React from 'react';
import live from "../../assets/brands/live-tracking.png"
import safe from "../../assets/brands/safe-delivery.png"
const FeaturesCard = () => {
    const features = [
      {
        id: 1,
        title: "Live Parcel Tracking",
        description:
          "Stay updated in real-time with our live parcel tracking feature, From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
        image: live,
      },
      {
        id: 2,
        title: "100% Safe Delivery",
        description:
          "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
        image: safe,
      },
      {
        id: 3,
        title: "24/7 Call Center Support",
        description:
          "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
        image: safe,
      },
    ];
    return (
      <section className="w-full bg-white">
        <div className="mx-auto max-w-7xl space-y-3 px-4 py-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex min-h-[140px] flex-col items-center gap-5 rounded-2xl bg-[#FAF0F0] px-4 py-10 md:flex-row md:gap-6 md:px-6 mt-10"
            >
              {/* Image */}
              <div className="flex w-full shrink-0 items-center justify-center md:w-[110px]">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="h-[110px] w-[110px] object-contain"
                />
              </div>

              {/* Dotted divider */}
              <div className="hidden h-[75px] border-l border-dotted border-gray-500 md:block" />

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="mb-2 text-base font-bold text-[#03373D]">
                  {feature.title}
                </h3>

                <p className="text-xs leading-5 text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
};

export default FeaturesCard;