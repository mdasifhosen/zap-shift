
import React from "react";

const ReviewCard = ({ review }) => {
  const {
    userName,
    review: text,
    user_photoURL,
  } = review;

  return (
    <div className="w-full h-full p-3 sm:p-4">
      <div className="bg-[#fdeaeadc] rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 w-full max-w-md mx-auto border border-rose-100/50 shadow-sm h-full flex flex-col">

        {/* Quote Icon */}
        <div className="text-5xl sm:text-6xl leading-none text-gray-300 font-serif mb-3 sm:mb-4 select-none">
          &ldquo;
        </div>

        {/* Review Text */}
        <p className=" text-sm sm:text-[15px] leading-relaxed font-normal mb-5 sm:mb-6 break-words">
          {text}
        </p>

        {/* Dashed Divider */}
        <div className="border-t border-dashed border-[#1a3c40]/30 my-4 sm:my-6 w-full" />

        {/* User Information */}
        <div className="flex flex-nowrap items-center gap-3 sm:gap-4 w-full min-w-0 mt-auto">

          {/* User Photo */}
          <img
            src={user_photoURL}
            alt={userName || "User"}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover shrink-0 border-2 border-[#1a3c40]"
          />

          {/* User Name & Designation */}
          <div className="min-w-0 flex-1">
            <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#1a3c40] leading-tight truncate">
              {userName || "Anonymous User"}
            </h3>

            <p className="text-xs sm:text-sm text-gray-600 font-medium mt-1 truncate">
              Senior Product Designer
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ReviewCard;

