import Button from "@/components/Button";
import Page from "@/components/Page";
import axios from "axios";
import { useState } from "react";

const apiUrl = "https://fakerapi.it/api/v1/addresses?_quantity=1";

interface Address {
  id: number;
  street: string;
  streetName: string;
  buildingNumber: string;
  city: string;
  zipcode: string;
  country: string;
  county_code: string;
  latitude: number;
  longitude: number;
}

export default function RentByLocation() {
  const [address, setAddress] = useState<Address[]>([
    {
      id: 1,
      street: "693 Kemmer Track Suite 821",
      streetName: "Estel Dale",
      buildingNumber: "90826",
      city: "New Tremaineside",
      zipcode: "31728",
      country: "Israel",
      county_code: "LU",
      latitude: 53.098425,
      longitude: 72.974436,
    },
  ]);

  const fetchAddress = async () => {
    try {
      await axios.get(apiUrl).then((response) => {});
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetchAddress();
  };

  return (
    <Page>
      <form onSubmit={handleSubmit}>
        <Button type="submit">Submit</Button>
        <div>
          {address && address.length > 0 && (
            <div>
              <h1>Address Details:</h1>
              <p>Street: {address[0].street}</p>
              <p>City: {address[0].city}</p>
              <p>Country: {address[0].country}</p>
              <p>Latitude: {address[0].latitude}</p>
              <p>Longitude: {address[0].longitude}</p>
            </div>
          )}
        </div>
      </form>
    </Page>
  );
}
