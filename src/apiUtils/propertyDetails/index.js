import { anonAxiosInstance } from "../api";

const PROPERTY_API_URL = "property";

export const getPropertyList = async (filters = {}) => {
  try {
    const params = new URLSearchParams();
    
    // Convert filters to URL params
    Object.entries(filters).forEach(([key, value]) => {
      if (value && value !== 'any' && !(Array.isArray(value) && value.length === 0)) {
        if (Array.isArray(value)) {
          params.set(key, value.join(','));
        } else {
          params.set(key, value);
        }
      }
    });

    const response = await anonAxiosInstance.get(`${PROPERTY_API_URL}?${params.toString()}`);
    // console.log(response.data)
    return response.data;
  } catch (error) {
    console.error("Error fetching property:", error);
    throw error;
  }
};

export const getFeaturedPropertyList = async () => {
  try {
    const response = await anonAxiosInstance.get(`${PROPERTY_API_URL}`);
    // console.log(response.data)
    return response.data;
  } catch (error) {
    console.error("Error fetching property:", error);
    throw error;
  }
};

export const getPropertyItem = async (propertyId) => {
  try {
    const response = await anonAxiosInstance.get(
      `${PROPERTY_API_URL}/${propertyId}/`
    );
    // console.log("Property detail response:", response.data);

    return response.data;
  } catch (error) {
    console.error("Error fetching property item:", error);
    throw error;
  }
};
