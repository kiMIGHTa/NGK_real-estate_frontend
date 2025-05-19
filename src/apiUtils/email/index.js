// apiUtils/contact.js
import { anonAxiosInstance } from "../api";

const CONTACT_API_URL = "contact/";

export const submitContactForm = async (formData) => {
  try {
    const response = await anonAxiosInstance.post(CONTACT_API_URL, formData);
    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return {
      success: false,
      error: error.response?.data || {
        message: "Failed to submit form. Please try again.",
      },
    };
  }
};

export const generateWhatsAppUrl = (formData, whatsappNumber = "254769375587") => {
  const message = `New inquiry from ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || "Not provided"}
Interest: ${formData.interest || "Not specified"}
${formData.property_id ? `Property ID: ${formData.property_id}` : ""}

Message:
${formData.message}`;

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
};