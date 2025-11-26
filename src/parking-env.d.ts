interface Parking {
  id: string;
  name: string;
  totalcapacity: number;
  availablecapacity: number;
  location: {
    lon: number;
    lat: number;
  };
  urllinkaddress: string;
}
