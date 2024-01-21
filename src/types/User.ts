// type GeolocationType = {
//   lat: string;
//   long: string;
// };

// type AdressType = {
//   geolocation: GeolocationType;
//   city: string;
//   street: string;
//   number: number;
//   zipcode: string;
// };

// type NameType = {
//   firstname: string;
//   lastname: string;
// };

// export type User = {
//   address: AdressType;
//   id: number;
//   email: string;
//   username: string;
//   password: string;
//   name: NameType;
//   phone: string;
//   __v: number;
// };

export type User = {
  email: string;
  username?: string;
  password: string;
};
