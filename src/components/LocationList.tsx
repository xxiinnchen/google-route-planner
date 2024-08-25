'use client'

import { useLocations } from '@/hooks/useLocations'

export default function LocationList() {
  const { locations, selectLocation } = useLocations()

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Locations</h2>
      <div className="space-y-2 max-h-[40vh] overflow-y-auto">
        {locations.map((location, index) => (
          <button
            key={index}
            onClick={() => selectLocation(location)}
            className="block w-full p-2 bg-gray-200 rounded text-left hover:bg-gray-300 transition"
          >
            <div className="font-semibold">{location.name}</div>
            <div className="text-sm text-gray-600">
              {location.lat.toFixed(6)}, {location.lng.toFixed(6)}
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
