import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { type ShelterData } from "../../components/types/shelter";

const ShelterList = () => {
  const [shelters, setShelters] = useState<ShelterData>();

  const shelterListClass = "grid grid-cols-2 gap-4";

  const shelterContainerClass =
    "flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700";

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
    <div className={shelterListClass}>
      {shelters &&
        shelters.data.map((shelter, shelterIndex) => (
          <div key={shelterIndex} className={shelterContainerClass}>
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg mr-4"
              src={shelter.photo}
              alt="shelterphoto"
            />
          </div>
        ))}
    </div>
  );
};

export default ShelterList;
