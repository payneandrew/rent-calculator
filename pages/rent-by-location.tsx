import Button from "@/components/Button";
import MapContainer from "@/components/MapContainer/MapContainer";
import Page from "@/components/Page";
import { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import { getAddress } from "../api/address";

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
      street: "",
      streetName: "",
      buildingNumber: "",
      city: "",
      zipcode: "",
      country: "",
      county_code: "",
      latitude: 0,
      longitude: 0,
    },
  ]);
  const [isLoading, setLoading] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setShowDetails(false);
    getAddress().then((response) => {
      setAddress(response);
      setLoading(false);
      setShowDetails(true);
    });
  };

  const markerPosition = {
    lat: address[0].latitude,
    lng: address[0].longitude,
  };
  console.log(markerPosition);
  //const markerPosition = { lat: 38.029305, lng: -78.476677 };
  return (
    <Page>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Press this button for a new address
            <Button type="submit">Submit</Button>
          </label>
        </div>
        <div>
          {isLoading && (
            <TailSpin
              height="50"
              width="50"
              color="#4fa94d"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          )}
          {showDetails && (
            <div>
              <h1 className="flex font-bold">Address Details</h1>
              <p>Street: {address[0].street}</p>
              <p>City: {address[0].city}</p>
              <p>Country: {address[0].country}</p>
              <p>Latitude: {address[0].latitude}</p>
              <p>Longitude: {address[0].longitude}</p>
            </div>
          )}
        </div>
        <div>
          <MapContainer
            markerPosition={markerPosition}
            defaultCenter={markerPosition}
          ></MapContainer>
        </div>
      </form>
    </Page>
  );
}
