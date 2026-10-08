import React from 'react';
import { CiDeliveryTruck } from 'react-icons/ci';

const Card = () => {
  const cards = [
    {
      id: 1,
      icon: <CiDeliveryTruck />,
      title: "Booking Pick & Drop",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
      bgColor: "bg-[#cae3f1]",
    },
    {
      id: 2,
      icon: <CiDeliveryTruck />,
      title: "Safe & Secure Delivery",
      description:
        "We make sure your parcel reaches its destination safely and securely.",
      bgColor: "bg-[#cae3f1]",
    },
    {
      id: 3,
      icon: <CiDeliveryTruck />,
      title: "Real-Time Tracking",
      description: "Track your parcel anytime and know exactly where it is.",
      bgColor: "bg-[#cae3f1]",
    },
    {
      id: 4,
      icon: <CiDeliveryTruck />,
      title: "Fast Delivery",
      description:
        "Get your packages delivered quickly with our reliable delivery service.",
      bgColor: "bg-[#cae3f1]",
    },
  ];

    return (
      <div className='mt-[100px]'>
        <h2 className="font-extrabold text-[32px] mb-6 text-[#03373D]">
          How it Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`w-[302px] h-[262px] p-8 rounded-[24px] cursor-pointer m-auto ${card.bgColor}`}
            >
              <div className="text-[56px] text-[#03373D] mb-3">{card.icon}</div>

              <h1 className="font-bold text-2xl text-[#03373D] mb-2">
                {card.title}
              </h1>

              <p className="font-medium text-[#606060]">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Card;