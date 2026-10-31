
import { use } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    control,
    // formState: { errors },
  } = useForm();

  const {user}=useAuth()
  const axiosSecure = useAxiosSecure()
  

  const navigate=useNavigate()

  const serviceCenters = useLoaderData();

  const regionsDuplicate = serviceCenters.map((c) => c.region);
  const regions = [...new Set(regionsDuplicate)];

  const senderRegion = useWatch({
    control,
    name: "senderRegion",
  });

  const receiverRegion = useWatch({
    control,
    name: "receiverRegion",
  });

  const districtByRegion = (region) => {
    const regionDistricts = serviceCenters.filter((c) => c.region === region);

    const districts = regionDistricts.map((d) => d.district);
    return districts;
  };

  const handleSendParcel = (data) => {
    const parcelWeight = parseFloat(data.parcelWeight);
    const isDocument = data.parcelType === "document";

   const isSameDistrict = data.senderDistricts=== data.receiverDistrict;

   let cost = 0;

   if (isDocument) {
     cost = isSameDistrict ? 60 : 80;
   } else {
     if (parcelWeight <= 3) {
       cost = isSameDistrict ? 110 : 150;
     } else {
       const extraWeight = parcelWeight - 3;

       cost = isSameDistrict ? 110 + extraWeight * 40 : 190 + extraWeight * 40;
     }
    }
    
    data.cost=cost

    Swal.fire({
      title: "Please confirm the cost?",
      text: `You will be charged ${cost} taka`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, confirm!",
    }).then((result) => {
      if (result.isConfirmed) {

        axiosSecure.post('/parcels', data)
          .then(res => {
            console.log('after saving parcel', res.data)
            
            
            if (res.data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Parcel has created. Please pay",
                showConfirmButton: false,
                timer: 2500,
              }).then(() => {
                navigate("/dashboard/my-parcels");
              });
            }
        })
        // Swal.fire({
        //   title: "Confirmed!",
        //   text: `Your parcel cost is ${cost} taka.`,
        //   icon: "success",
        // });
      }
    });
  };

  return (
    <div>
      <h2 className="text-5xl font-bold mt-4 ml-3">Send A Parcel</h2>

      <form
        onSubmit={handleSubmit(handleSendParcel)}
        className="mt-12 p-4 text-black"
      >
        {/* {document} */}
        <div>
          <label className="label mr-4">
            <input
              type="radio"
              {...register("parcelType")}
              value="document"
              className="radio"
              defaultChecked
            />
            Document
          </label>

          <label className="label">
            <input
              type="radio"
              {...register("parcelType")}
              value="non-document"
              className="radio"
            />
            Non-Document
          </label>
        </div>

        {/* parcel info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-8">
          <fieldset className="fieldset">
            <label className="label">Parcel Name</label>
            <input
              type="text"
              className="input w-full"
              {...register("parcelName")}
              placeholder="Parcel Name"
            />
          </fieldset>

          <fieldset className="fieldset">
            <label className="label">Parcel Weight (kg)</label>
            <input
              type="number"
              step="any"
              className="input w-full"
              {...register("parcelWeight")}
              placeholder="Parcel Weight"
            />
          </fieldset>
        </div>

        {/* two column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-8">
          <div>
            <fieldset className="fieldset">
              <h4 className="text-2xl font-semibold">Sender Details</h4>

              <label className="label">Sender Name</label>
              <input
                type="text"
                className="input w-full"
              defaultValue={user?.displayName}
                {...register("SenderName")}
                placeholder="Sender Name"
              />

              <label className="label">Sender Email</label>
              <input
                type="email"
                className="input w-full"
              defaultValue={user?.email}
                {...register("SenderEmail")}
                placeholder="Sender Email"
              />

              <fieldset className="fieldset">
                <legend className="fieldset-legend">SenderRegions</legend>
                <select
                  defaultValue="Pick a regions"
                  className="select"
                  {...register("senderRegion")}
                >
                  <option disabled value="Pick a regions">
                    Pick a regions
                  </option>

                  {regions.map((r, i) => (
                    <option key={i} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Sender Districts</legend>
                <select
                  defaultValue="Pick a districts"
                  className="select"
                  {...register("senderDistricts")}
                >
                  <option disabled value="Pick a districts">
                    Pick a Districts
                  </option>

                  {districtByRegion(senderRegion).map((r, i) => (
                    <option key={i} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </fieldset>

              <label className="label mt-4">Sender Address</label>
              <input
                type="text"
                className="input w-full"
                {...register("SenderAddress")}
                placeholder="Sender Address"
              />

              <label className="label mt-4">Sender Phone No</label>
              <input
                type="number"
                className="input w-full"
                {...register("SenderPhone")}
                placeholder="SenderPhone"
              />
            </fieldset>
          </div>

          <div>
            <fieldset className="fieldset">
              <h4 className="text-2xl font-semibold">Receiver Details</h4>

              <label className="label">Receiver Name</label>
              <input
                type="text"
                className="input w-full"
                {...register("receiverName")}
                placeholder="Receiver Name"
              />

              <label className="label">Receiver Email</label>
              <input
                type="email"
                className="input w-full"
                {...register("receiverEmail")}
                placeholder="Receiver Email"
              />

              <fieldset className="fieldset">
                <legend className="fieldset-legend">ReceiverRegions</legend>
                <select
                  defaultValue="Pick a regions"
                  className="select"
                  {...register("receiverRegion")}
                >
                  <option disabled value="Pick a regions">
                    Pick a regions
                  </option>

                  {regions.map((r, i) => (
                    <option key={i} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </fieldset>

              <fieldset className="fieldset">
                <legend className="fieldset-legend">Receiver District</legend>
                <select
                  defaultValue="Pick a district"
                  className="select"
                  {...register("receiverDistrict")}
                >
                  <option disabled value="Pick a district">
                    Pick a District
                  </option>

                  {districtByRegion(receiverRegion).map((d, i) => (
                    <option key={i} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </fieldset>

              <label className="label mt-4">Receiver Address</label>
              <input
                type="text"
                className="input w-full"
                {...register("receiverAddress")}
                placeholder="Receiver Address"
              />

              <label className="label mt-4">Receiver Phone No</label>
              <input
                type="number"
                className="input w-full"
                {...register("receiverPhone")}
                placeholder="ReceiverPhone"
              />
            </fieldset>
          </div>
        </div>

        <input
          type="submit"
          className="btn btn-primary text-black"
          value="Send Parcel"
        />
      </form>
    </div>
  );
};

export default SendParcel;
