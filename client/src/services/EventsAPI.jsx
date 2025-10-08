const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

export const getAllEvents = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/api/events`);
    if (!res.ok) throw new Error("Failed to fetch events");
    return await res.json();
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
};
