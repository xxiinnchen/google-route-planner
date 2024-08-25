'use client'

import LocationForm from '@/components/LocationForm'
import LocationList from '@/components/LocationList'
import RouteDisplay from '@/components/RouteDisplay'

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
        <h1 className="text-4xl font-bold mb-8 text-center">Google Route Planner</h1>
        <LocationForm />
        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <LocationList />
          </div>
          <div className="w-full md:w-1/2">
            <RouteDisplay />
          </div>
        </div>
      </div>
    </main>
  )
}
