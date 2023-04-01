import { useLocation } from "react-router-dom";
import MapComponent from "../components/MapComponent";

const MapScreen = () => {
  const location = useLocation();
  return (
    <div>
      <MapComponent locationData={location.state.location} />
    </div>
  );
};

export default MapScreen;
