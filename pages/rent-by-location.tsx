import { getAddress } from "@/api/address";
import Button from "@/components/Button";
import LoadingSpinner from "@/components/LoadingSpinner";
import MapContainer from "@/components/MapContainer";
import Page from "@/components/Page";
import { Address } from "@/types/address";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";

export default function RentByLocation() {
  const queryClient = useQueryClient();
  const { mutate, isLoading, isError } = useMutation(getAddress, {
    onSuccess: async (address) => {
      setAddress(address);
      await queryClient.invalidateQueries(["address"]);
    },
  });
  const [showDetails, setShowDetails] = useState(false);
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
      latitude: 38.029305,
      longitude: -78.476677,
    },
  ]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutate();
    setShowDetails(true);
  };

  const markerPosition = {
    lat: address[0].latitude,
    lng: address[0].longitude,
  };
  return (
    <Page>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="flex items-center space-x-4">
          <span className="text-lg text-gray-800">
            Press this button for an address
          </span>
          <Button type="submit">Submit</Button>
        </div>
        <div className="flex flex-col justify-end space-y-4 mt-auto">
          {isLoading && <LoadingSpinner />}
          {!isLoading && showDetails && (
            <div className="space-y-1">
              <h1 className="flex font-bold">Address Details</h1>
              <p>Street: {address[0].street}</p>
              <p>City: {address[0].city}</p>
              <p>Country: {address[0].country}</p>
              <p>Latitude: {address[0].latitude}</p>
              <p>Longitude: {address[0].longitude}</p>
            </div>
          )}
        </div>
        <MapContainer
          markerPosition={markerPosition}
          defaultCenter={markerPosition}
        />
      </form>
    </Page>
  );
}
