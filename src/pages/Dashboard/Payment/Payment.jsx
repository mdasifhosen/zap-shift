import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Payment = () => {
  const { parcelId } = useParams();
  const axiosSecure = useAxiosSecure();

  const { isLoading, data: parcel } = useQuery({
    queryKey: ["parcels", parcelId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/${parcelId}`);
      return res.data;
    },
  });

  // const handlePayment = async () => {
  //   try {
  //     const paymentInfo = {
  //       cost: parcel.cost,
  //       parcelId: parcel._id,
  //       senderEmail: parcel.SenderEmail,
  //       parcelName: parcel.parcelName,
  //     };

  //     const res = await axiosSecure.post(
  //       "/create-checkout-session",
  //       paymentInfo,
  //     );

  //     console.log(res.data);

  //     window.location.href = res.data.url;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const handlePayment = async () => {
    console.log("Pay button clicked");

    try {
      console.log("Parcel ID:", parcel?._id);

      const res = await axiosSecure.post("/payment-checkout-session", {
        parcelId: parcel._id,
      });

      console.log("Payment response:", res.data);

      if (res.data.url) {
        window.location.href = res.data.url;
      } else {
        alert("Payment URL not found!");
      }
    } catch (error) {
      console.error("Payment Error:", error);
      console.error("Server Response:", error.response?.data);

      alert(error.response?.data?.message || "Payment failed!");
    }
  };

  if (isLoading) {
    return (
      <div>
        <span className="loading loading-infinity loading-xl"></span>
      </div>
    );
  }

  return (
    <div>
      <h2>
        Please pay ${parcel.cost} for: {parcel.parcelName}
      </h2>

      <button
        onClick={handlePayment}
        className="btn btn-primary"
        disabled={!parcel}
      >
        Pay Now
      </button>
    </div>
  );
};

export default Payment;
