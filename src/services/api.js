import { API_BASE_URL, MAX_RETRIES, RETRY_DELAY } from "../utils/constants";

const fetchWithRetry = async (url, options, retries = MAX_RETRIES) => {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || `HTTP error! Status: ${response.status}`
        );
      }
      return response.json();
    } catch (error) {
      if (i === retries - 1) throw error;
      await new Promise((resolve) =>
        setTimeout(resolve, RETRY_DELAY * (i + 1))
      );
    }
  }
};

export const railRouteApi = {
  getRouteDistance: async (stations) => {
    const url = `${API_BASE_URL}/distance`;
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ stations }),
    };
    return fetchWithRetry(url, options);
  },

  getShortestDistance: async (start, end) => {
    const url = `${API_BASE_URL}/shortest-distance?start=${start}&end=${end}`;
    const options = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    return fetchWithRetry(url, options);
  },

  // Question 6: Trips with max stops
  getTripsWithMaxStops: async (start, end, maxStops) => {
    const url = `${API_BASE_URL}/trips/max-stops?start=${start}&end=${end}&maxStops=${maxStops}`;
    const options = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    return fetchWithRetry(url, options);
  },

  // Question 7: Trips with exact stops
  getTripsWithExactStops: async (start, end, exactStops) => {
    const url = `${API_BASE_URL}/trips/exact-stops?start=${start}&end=${end}&exactStops=${exactStops}`;
    const options = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    return fetchWithRetry(url, options);
  },

  // Question 10: Trips with max distance
  getTripsWithMaxDistance: async (start, end, maxDistance) => {
    const url = `${API_BASE_URL}/trips/max-distance?start=${start}&end=${end}&maxDistance=${maxDistance}`;
    const options = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    return fetchWithRetry(url, options);
  },

  // Optional: Reload routes from file
  reloadRoutes: async () => {
    const url = `${API_BASE_URL}/reload-routes`;
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    };
    return fetchWithRetry(url, options);
  },
};
