export interface Pet {
  picture: string;
  name: string;
  breed: string;
  age: number;
  availability: boolean;
  location: string;
}

export interface Shelter {
  name: string;
  location: string;
  phoneNumber: string;
  photo: string;
  pets: Pet[];
}

export interface ShelterData {
  data: Shelter[];
}
