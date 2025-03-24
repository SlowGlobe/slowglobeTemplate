import type { Trip } from '@/functions/trips'
import imgUrl from '@/assets/images/other/20240922_172726-2.jpg?w=600&gallery'
import overviewGeo from './geometry.geojson?simplify'
import detailGeo from './geometry.geojson'

export const demoTrip: Trip = {
  id: 'demoTrip',
  name: 'An Example Trip',
  headerImage: imgUrl,
  date: '2025-01-01',
  locationText: 'Stockholm, Sweden',
  geography: {
    overview: {
      center: [18.068637908878713, 59.324562372407144],
      tracks: overviewGeo,
      zoom: 7
    },
    detail: detailGeo
  }
}
