"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { getPropertyList } from "../apiUtils/propertyDetails"

export default function PropertyFilters({onFilterChange}) {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const debounceTimer = useRef(null)

  
  const [showAdvanced, setShowAdvanced] = useState(false)
  const [filters, setFilters] = useState({
    search: searchParams.get('search') || '',
    type: searchParams.get('type') || 'any',
    min_price: searchParams.get('min_price') || '',
    max_price: searchParams.get('max_price') || '',
    bedrooms: searchParams.get('bedrooms') || 'any',
    bathrooms: searchParams.get('bathrooms') || 'any',
    status: searchParams.get('status') || 'any',
    min_sqft: searchParams.get('min_sqft') || '',
    min_year: searchParams.get('min_year') || 'any',
    // features: searchParams.get('features')?.split(',') || []
  })

  const propertyTypes = [
    { value: 'any', label: 'Any Type' },
    { value: 'house', label: 'House' },
    { value: 'apartment', label: 'Apartment' },
    { value: 'land', label: 'Land' },
    { value: 'commercial_land', label: 'Commercial Land' },
    { value: 'villa', label: 'Villa' },
    { value: 'office', label: 'Office' },
    { value: 'shop', label: 'Shop' },
  ]

  const propertyStatuses = [
    { value: 'any', label: 'Any Status' },
    { value: 'for_rent', label: 'For Rent' },
    { value: 'for_sale', label: 'For Sale' },
    { value: 'sold', label: 'Sold' },
    { value: 'under_offer', label: 'Under Offer' },
  ]

  const featuresList = ["Pool", "Garage", "Air Conditioning", "Gym", "Fireplace", "Waterfront", "Parking", "Furnished"]

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target
    setFilters(prev => ({
      ...prev,
      [name]: type === 'checkbox'  
        ? checked
          ? [...prev.features, value]
          : prev.features.filter(f => f !== value)
        : value
    }))
  }

  const handlePriceChange = (e) => {
    const { name, value } = e.target
    setFilters(prev => ({
      ...prev,
      [name]: value ? parseInt(value) : ''
    }))
  }

    // Debounced filter application
    useEffect(() => {
      // Clear any existing timer
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current)
      }
      
      // Set a new timer to apply filters after  inactivity
      debounceTimer.current = setTimeout(() => {
        applyFilters()
      }, 200)
      
      // Cleanup function to clear the timer
      return () => {
        if (debounceTimer.current) {
          clearTimeout(debounceTimer.current)
        }
      }
    }, [filters])

  // Move applyFilters outside useEffect and memoize it
  const applyFilters = useCallback(async () => {
    try {
      const filteredProperties = await getPropertyList(filters)
      onFilterChange(filteredProperties)
      
      // Update URL with current filters
      const params = new URLSearchParams()
      Object.entries(filters).forEach(([key, value]) => {
        if (value && value !== 'any' && !(Array.isArray(value) && value.length === 0)) {
          params.set(key, Array.isArray(value) ? value.join(',') : value)
        }
      })
      navigate(`/properties?${params.toString()}`)
      
    } catch (error) {
      console.error("Error applying filters:", error)
    }
  }, [filters, onFilterChange, navigate])

  const resetFilters = () => {
    setFilters({
      search: '',
      type: 'any',
      min_price: '',
      max_price: '',
      bedrooms: 'any',
      bathrooms: 'any',
      status: 'any',
      min_sqft: '',
      min_year: 'any',
      features: []
    })
    navigate('/properties')
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="md:col-span-2">
          <input 
            type="text" 
            name="search"
            placeholder="Search by location, property name, or keyword" 
            className="input-field"
            value={filters.search}
            onChange={handleFilterChange}
          />
        </div>
        <select 
          name="type"
          className="dropdown-select"
          value={filters.type}
          onChange={handleFilterChange}
        >
          {propertyTypes.map(type => (
            <option key={type.value} value={type.value}>{type.label}</option>
          ))}
        </select>
        <button className="btn-primary" onClick={applyFilters}>
          Search
        </button>
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
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="number"
                    name="min_price"
                    placeholder="Min"
                    className="input-field"
                    value={filters.min_price}
                    onChange={handlePriceChange}
                  />
                  <input
                    type="number"
                    name="max_price"
                    placeholder="Max"
                    className="input-field"
                    value={filters.max_price}
                    onChange={handlePriceChange}
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Bedrooms</label>
                <select 
                  name="bedrooms"
                  className="dropdown-select"
                  value={filters.bedrooms}
                  onChange={handleFilterChange}
                >
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
                <select 
                  name="bathrooms"
                  className="dropdown-select"
                  value={filters.bathrooms}
                  onChange={handleFilterChange}
                >
                  <option value="any">Any</option>
                  <option value="1">1+</option>
                  <option value="2">2+</option>
                  <option value="3">3+</option>
                  <option value="4">4+</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Property Status</label>
                <select 
                  name="status"
                  className="dropdown-select"
                  value={filters.status}
                  onChange={handleFilterChange}
                >
                  {propertyStatuses.map(status => (
                    <option key={status.value} value={status.value}>{status.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Min Square Feet</label>
                <input
                  type="number"
                  name="min_sqft"
                  placeholder="Minimum"
                  className="input-field"
                  value={filters.min_sqft}
                  onChange={handlePriceChange}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">Year Built</label>
                <select 
                  name="min_year"
                  className="dropdown-select"
                  value={filters.min_year}
                  onChange={handleFilterChange}
                >
                  <option value="any">Any</option>
                  <option value="2020">2020+</option>
                  <option value="2010">2010+</option>
                  <option value="2000">2000+</option>
                  <option value="1990">1990+</option>
                  <option value="1980">1980+</option>
                </select>
              </div>
            </div>

            {/* <div className="mt-6">
              <label className="mb-2 block text-sm font-medium">Features</label>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {featuresList.map(feature => (
                  <div key={feature} className="flex items-center space-x-2">
                    <input 
                      type="checkbox" 
                      id={feature.toLowerCase()} 
                      className="rounded accent-brown"
                      value={feature}
                      checked={filters.features.includes(feature)}
                      onChange={handleFilterChange}
                    />
                    <label htmlFor={feature.toLowerCase()} className="text-sm">
                      {feature}
                    </label>
                  </div>
                ))}
              </div>
            </div> */}

            <div className="flex justify-end mt-6 gap-2">
              <button 
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                onClick={resetFilters}
              >
                Reset
              </button>
              <button className="btn-primary" onClick={applyFilters}>
                Apply Filters
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}