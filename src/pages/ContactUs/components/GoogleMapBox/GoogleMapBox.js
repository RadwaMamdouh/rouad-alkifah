import { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// Define the map container styles
const containerStyle = {
	width: "100%",
	height: "540px",
	minHeight: "100%",
};

const center = {
	lat: 25.4298301, // Latitude of the center of the map
	lng: 49.5722766, // Longitude of the center of the map
};

const GoogleMapBox = () => {
	const [, setMap] = useState(null);

	const onLoad = (mapInstance) => {
		setMap(mapInstance);
	};

	const onUnmount = () => {
		setMap(null);
	};

	return (
		<LoadScript googleMapsApiKey="AIzaSyBLmtEvrX8Cku34lrOlTuzceoNSteFM1cw">
			<GoogleMap
				id="google-map"
				mapContainerStyle={containerStyle}
				center={center}
				zoom={12}
				onLoad={onLoad}
				onUnmount={onUnmount}>
				{/* Marker example */}
				<Marker position={center} />
			</GoogleMap>
		</LoadScript>
	);
};

export default GoogleMapBox;
