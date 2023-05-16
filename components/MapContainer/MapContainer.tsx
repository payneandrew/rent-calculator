import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

interface MarkerPosition {
  lat: number;
  lng: number;
}

interface MapContainerProps {
  defaultCenter?: MarkerPosition;
  markerPosition: MarkerPosition;
}

const MapContainer: React.FC<MapContainerProps> = ({
  defaultCenter = { lat: 38.029305, lng: -78.476677 },
  markerPosition,
}) => {
  const mapStyles = {
    height: "100vh",
    width: "100%",
  };

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
      <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter}>
        <Marker position={markerPosition} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
