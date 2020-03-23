export interface ICoordinates {
  lat: number | null,
  lng: number | null
}

export interface ICard {
  id: string,
  name: string,
  coords: {
    latitude: number,
    longitude: number
  }
}