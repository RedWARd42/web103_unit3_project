// client/src/services/LocationsAPI.jsx

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

// ✅ Fetch all locations
export const getAllLocations = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/api/locations`);
    if (!res.ok) throw new Error("Failed to fetch locations");
    return await res.json();
  } catch (error) {
    console.error("Error fetching locations:", error);
    return [];
  }
};

// ✅ Fetch single location by ID
export const getLocationById = async (id) => {
  try {
    const res = await fetch(`${API_BASE_URL}/api/locations/${id}`);
    if (!res.ok) throw new Error("Failed to fetch location by ID");
    return await res.json();
  } catch (error) {
    console.error("Error fetching location by ID:", error);
    return null;
  }
};

// ✅ Optional default export (if your pages use it)
export default {
  getAllLocations,
  getLocationById,
};
