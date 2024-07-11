import React, {
  ChangeEventHandler,
  FormEventHandler,
  ReactEventHandler,
} from "react";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

interface ShelterData {
  name: string;
  location: string;
  phoneNumber: string;
  photo: string;
  pets: string[];
}

const CreateShelter = () => {
  const [shelterData, setShelterData] = useState<ShelterData>({
    name: "",
    location: "",
    phoneNumber: "",
    photo: "",
    pets: [],
  });

  const createNewShelter = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, location, phoneNumber, photo, pets } = shelterData;
    try {
      const { data } = await axios.post("http://localhost:3000/shelter/", {
        name,
        location,
        phoneNumber,
        photo,
        pets,
      });
      if (data.error) {
        toast.error("Error creating new shelter", data.error);
      } else {
        setShelterData({
          name: "",
          location: "",
          phoneNumber: "",
          photo: "",
          pets: [],
        });
        toast.success("Created a new shelter");
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={createNewShelter}>
        <label>Name:</label>
        <input
          type="text"
          placeholder="Shelter Name Here"
          required
          value={shelterData.name}
          onChange={(e) =>
            setShelterData({ ...shelterData, name: e.target.value })
          }
        />
        <label>Location:</label>
        <input
          type="text"
          placeholder="Location"
          required
          value={shelterData.location}
          onChange={(e) =>
            setShelterData({ ...shelterData, location: e.target.value })
          }
        />
        <label>Phone Number:</label>
        <input
          type="text"
          placeholder="Phone Number"
          required
          value={shelterData.phoneNumber}
          onChange={(e) =>
            setShelterData({ ...shelterData, phoneNumber: e.target.value })
          }
        />
        <label>Photo Url:</label>
        <input
          type="text"
          placeholder="Photo Url"
          value={shelterData.photo}
          onChange={(e) =>
            setShelterData({ ...shelterData, photo: e.target.value })
          }
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateShelter;

