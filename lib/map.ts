export type Coordinates = {
  lat: number;
  lng: number;
};

export function formatCoordinates(location: Coordinates) {
  return `${location.lat.toFixed(5)}, ${location.lng.toFixed(5)}`;
}
