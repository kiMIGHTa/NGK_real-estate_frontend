"use client"

import { useState } from "react";
import { submitContactForm, generateWhatsAppUrl } from "../apiUtils/email/index";

export default function ContactForm({ propertyId = null }) {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
    property_id: propertyId || null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Send to your Django backend using apiUtils
      // Prepare the data exactly as the serializer expects
      const submissionData = {
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
        phone: formData.phone || '', // Ensure phone is empty string if not provided
        message: formData.message,
        property_id: propertyId ? parseInt(propertyId) : null // Ensure proper type
      };

      // Remove null or undefined values
      const cleanData = Object.fromEntries(
        Object.entries(submissionData).filter(([_, v]) => v !== null && v !== undefined)
      );

      const response = await submitContactForm(cleanData);

      if (!response.success) {
        throw new Error(response.error.message || 'Failed to submit form');
      }

      // Open WhatsApp with the generated message
      const whatsappUrl = generateWhatsAppUrl({
        ...formData,
        name: `${formData.first_name} ${formData.last_name}`
      });
      console.log(whatsappUrl);
      
      window.open(whatsappUrl, '_blank');

      setSubmitStatus({ success: true, message: 'Message sent successfully!' });
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        interest: '',
        message: '',
        property_id: propertyId || ''
      });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: error.message || 'Failed to send message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {submitStatus && (
        <div className={`p-4 rounded ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {submitStatus.message}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            className="input-field"
            value={formData.first_name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="last_name"
            placeholder="Last Name"
            className="input-field"
            value={formData.last_name}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="input-field"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className="input-field"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      {!propertyId && (
        <div>
          <select
            name="interest"
            className="dropdown-select"
            value={formData.interest}
            onChange={handleChange}
          >
            <option value="">I'm interested in...</option>
            <option value="buying">Buying a property</option>
            <option value="selling">Selling a property</option>
            <option value="renting">Renting a property</option>
            <option value="investing">Property investment</option>
            <option value="other">Other inquiry</option>
          </select>
        </div>
      )}
      <div>
        <textarea
          name="message"
          placeholder="Your Message"
          className="input-field min-h-[120px]"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      {propertyId && (
        <input type="hidden" name="property_id" value={propertyId} />
      )}
      <button
        type="submit"
        className="w-full btn-primary"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}