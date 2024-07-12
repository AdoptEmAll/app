import React, { type FC } from "react";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import InputField from "../../components/InputField";

interface ShelterData {
  name: string;
  location: string;
  phoneNumber: string;
  photo: string;
  pets: string[];
}

const CreateShelter: FC = () => {
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

  const inputFields = [
    {
      label: "Name",
      name: "name",
      type: "text",
      placeholder: "Shelter Name Here",
      required: true,
    },
    {
      label: "Location",
      name: "location",
      type: "text",
      placeholder: "Location",
      required: true,
    },
    {
      label: "Phone Number",
      name: "phoneNumber",
      type: "text",
      placeholder: "Phone Number",
      required: true,
    },
    {
      label: "Photo Url",
      name: "photo",
      type: "text",
      placeholder: "Photo Url",
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setShelterData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={createNewShelter}>
      {inputFields.map((field) => (
        <InputField
          key={field.name}
          label={field.label}
          name={field.name}
          type={field.type}
          placeholder={field.placeholder}
          value={shelterData[field.name]}
          required={field.required}
          onChangeCb={handleInputChange}
        />
      ))}
      <button type="submit">Create</button>
    </form>
  );
};

export default CreateShelter;
