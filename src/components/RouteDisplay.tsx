'use client'

import { useState, useEffect } from 'react'
import { useLocations } from '@/hooks/useLocations'

export default function RouteDisplay() {
  const { selectedLocations, clearRoute } = useLocations()
  const [currentLocation, setCurrentLocation] = useState<GeolocationCoordinates | null>(null)

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => setCurrentLocation(position.coords),
        (error) => console.error('Error getting location:', error)
      )
    }
  }, [])

  const generateMapsUrl = () => {
    let locationString = selectedLocations
      .map(loc => `${loc.lat.toFixed(6)},${loc.lng.toFixed(6)}`)
      .join('/')

    if (currentLocation) {
      locationString = `${currentLocation.latitude.toFixed(6)},${currentLocation.longitude.toFixed(6)}/${locationString}`
    }

    return `https://www.google.com/maps/dir/${locationString}`
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Selected Route</h2>
      <div className="space-y-2 max-h-[40vh] overflow-y-auto mb-4">
        {currentLocation && (
          <p className="text-green-600">
            Starting from current location: 
            {currentLocation.latitude.toFixed(6)}, {currentLocation.longitude.toFixed(6)}
          </p>
        )}
        {selectedLocations.map((location, index) => (
          <p key={index}>
            <span className="font-semibold">{location.name}</span><br />
            <span className="text-sm text-gray-600">
              {location.lat.toFixed(6)}, {location.lng.toFixed(6)}
            </span>
          </p>
        ))}
      </div>
      <div className="space-x-2">
        {selectedLocations.length > 0 && (
          <>
            <a
              href={generateMapsUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block p-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
            >
              Open in Google Maps
            </a>
            <button
              onClick={clearRoute}
              className="p-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
              Clear Route
            </button>
          </>
        )}
      </div>
    </div>
  )
}
