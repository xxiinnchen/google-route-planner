'use client'

import { useState } from 'react'
import { useLocations } from '@/hooks/useLocations'

export default function LocationForm() {
  const [coordinates, setCoordinates] = useState('')
  const [name, setName] = useState('')
  const { addLocation } = useLocations()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const [lat, lng] = coordinates.split(',').map(coord => coord.trim())
    if (lat && lng && name) {
      addLocation({ 
        lat: parseFloat(lat), 
        lng: parseFloat(lng), 
        name: name.trim() 
      })
      setCoordinates('')
      setName('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
        <input
          type="text"
          value={coordinates}
          onChange={(e) => setCoordinates(e.target.value)}
          placeholder="Latitude, Longitude (e.g., 33.993942, -106.859970)"
          className="flex-grow p-2 border rounded"
        />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Location Name"
          className="flex-grow p-2 border rounded"
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">
          Add Location
        </button>
      </div>
    </form>
  )
}
