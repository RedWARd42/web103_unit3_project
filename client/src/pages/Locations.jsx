import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LocationsAPI from "../services/LocationsAPI";
import "../css/Locations.css";

const Locations = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await LocationsAPI.getAllLocations();
      setLocations(data);
    })();
  }, []);

  return (
    <div className="locations">
      {locations.map((loc) => {
        const cleanName = loc.name.toLowerCase().replace(/\s/g, "");
        return (
          // ✅ You can put the comment here, outside the tag
          <Link
            key={loc.id}
            to={`/locations/${cleanName}`}
            className="location-card"
          >
            <img src={loc.image} alt={loc.name} />
            <h3>{loc.name}</h3>
            <p>
              {loc.city}, {loc.state}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default Locations;
