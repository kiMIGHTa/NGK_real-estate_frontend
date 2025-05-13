import { anonAxiosInstance } from "../api";

const PROPERTY_API_URL = "property";

export const getPropertyList = async () => {
  try {
    const response = await anonAxiosInstance.get(`${PROPERTY_API_URL}`);
    console.log("Property list response:", response.data);
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
    return response.data;
  } catch (error) {
    console.error("Error fetching property item:", error);
    throw error;
  }
};
