
import React from "react";
import location from "../../../assets/brands/location-merchant.png";

const BannerSection = () => {
  return (
    <div className="w-full max-w-[1281px] mx-auto px-4 sm:px-6 lg:px-8 mt-10 md:mt-20">
      <div className="bg-[#03373D] rounded-2xl p-5 sm:p-8 lg:p-12 xl:p-16">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10">

          {/* Left Content */}
          <div className="w-full lg:flex-1">
            <h1 className="font-extrabold text-2xl sm:text-3xl lg:text-[40px] text-white leading-tight">
              Merchant and Customer Satisfaction is
              <br className="hidden xl:block" /> Our First Priority
            </h1>

            <p className="text-white text-sm sm:text-base mt-4 leading-7">
              We offer the lowest delivery charge with the highest value along
              with 100% safety of your product. Pathao courier delivers your
              parcels in every corner of Bangladesh right on time.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mt-6">
              <button className="w-full sm:w-auto px-6 py-4 bg-[#CAEB66] rounded-3xl font-extrabold cursor-pointer hover:bg-white transition-colors">
                Become a Merchant
              </button>

              <button className="w-full sm:w-auto px-6 py-4 bg-[#CAEB66] rounded-3xl font-extrabold cursor-pointer hover:bg-white transition-colors">
                Earn with ZapShift Courier
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:flex-1 flex justify-center">
            <img
              className="w-full max-w-[531px] h-auto object-contain"
              src={location}
              alt="Merchant location illustration"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default BannerSection;

