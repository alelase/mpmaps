/// <reference types="google.maps" />
/// <reference types="googlemaps" />
import React from 'react';
declare const Polygon: React.FC<google.maps.PolygonOptions & {
    onClick?: () => void;
}>;
export default Polygon;
