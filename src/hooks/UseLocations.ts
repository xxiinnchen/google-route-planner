import { create } from 'zustand'

interface Location {
  lat: number
  lng: number
  name: string
}

interface LocationStore {
  locations: Location[]
  selectedLocations: Location[]
  addLocation: (location: Location) => void
  selectLocation: (location: Location) => void
  clearRoute: () => void
}

export const useLocations = create<LocationStore>((set) => ({
  locations: [],
  selectedLocations: [],
  addLocation: (location) =>
    set((state) => ({ locations: [...state.locations, location] })),
  selectLocation: (location) =>
    set((state) => ({ selectedLocations: [...state.selectedLocations, location] })),
  clearRoute: () => set({ selectedLocations: [] }),
}))
