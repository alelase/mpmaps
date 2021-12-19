import { createContext } from 'react';

const MapContext = createContext<google.maps.Map | null | undefined>(null);

export default MapContext;
