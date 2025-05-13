"use client"

import { useState } from "react"

export default function PropertyFilters() {
  const [showAdvanced, setShowAdvanced] = useState(false)

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="md:col-span-2">
          <input type="text" placeholder="Search by location, property name, or keyword" className="input-field" />
        </div>
        <select className="dropdown-select ">
          <option value="any">Any Type</option>
          <option value="house">House</option>
          <option value="apartment">Apartment</option>
          <option value="condo">Condo</option>
          <option value="townhouse">Townhouse</option>
          <option value="land">Land</option>
        </select>
        <button className="btn-primary">Search</button>
      </div>

      <div>
        <button
          className="flex items-center text-brown font-medium mb-4"
          onClick={() => setShowAdvanced(!showAdvanced)}
        >
          {showAdvanced ? "Hide" : "Show"} Advanced Filters
          <svg
            className={`ml-2 h-5 w-5 transform transition-transform ${showAdvanced ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {showAdvanced && (
          <div className="pt-2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <label className="mb-2 block text-sm font-medium">Price Range</label>
                <div className="space-y-4">
                  <input type="range" min="0" max="100" className="w-full accent-brown" />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>0</span>
                    <span>2,000,000+</span>
                  </div>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Bedrooms</label>
                <select className="dropdown-select">
                  <option value="any">Any</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                  <option value="5">5+</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Bathrooms</label>
                <select className="dropdown-select">
                  <option value="any">Any</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Property Status</label>
                <select className="dropdown-select">
                  <option value="any">Any</option>
                  <option value="sale">For Sale</option>
                  <option value="rent">For Rent</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Square Feet</label>
                <div className="space-y-4">
                  <input type="range" min="0" max="100" className="w-full accent-green" />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>0</span>
                    <span>5,000+</span>
                  </div>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Year Built</label>
                <select className="dropdown-select">
                  <option value="any">Any</option>
                  <option value="2020">2020+</option>
                  <option value="2010">2010+</option>
                  <option value="2000">2000+</option>
                  <option value="1990">1990+</option>
                  <option value="1980">1980+</option>
                </select>
              </div>
            </div>

            <div className="mt-6">
              <label className="mb-2 block text-sm font-medium">Features</label>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {["Pool", "Garage", "Air Conditioning", "Gym", "Fireplace", "Waterfront", "Parking", "Furnished"].map(
                  (feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <input type="checkbox" id={feature.toLowerCase()} className="rounded accent-brown" />
                      <label htmlFor={feature.toLowerCase()} className="text-sm">
                        {feature}
                      </label>
                    </div>
                  ),
                )}
              </div>
            </div>

            <div className="flex justify-end mt-6 gap-2">
              <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                Reset
              </button>
              <button className="btn-primary">Apply Filters</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
