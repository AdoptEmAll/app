import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const ShelterList = () => {
  const [shelters, setShelters] = useState([]);

  const getShelters = async () => {
    try {
      const res = await axios.get("http://localhost:3000/shelter/");
      if (res.data) {
        setShelters(res.data);
        toast.success("Grabbed all shelters");
      }
    } catch (error) {
      console.log("Error fetching shelters", error.message);
      toast.error("Failed to get shelters");
    }
  };

  useEffect(() => {
    getShelters();
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4">
      {shelters.data &&
        shelters.data.map((shelter) => (
          <div
            key={shelter._id}
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg mr-4"
              src={shelter.photo}
              alt="shelterphoto"
            />
            <div className="flex flex-col">
              <h5 className="mb-2 text-2xl font-bold tacking-tight text-gray-900 dark:text-white">
                {shelter.name}
                <p className="text-sm mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {shelter.phoneNumber}
                </p>
              </h5>
              <p className="mb=-3 font-normal text-gray-700 dark:text-gray-400">
                {shelter.location}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ShelterList;
