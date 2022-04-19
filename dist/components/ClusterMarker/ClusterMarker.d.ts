/// <reference types="google.maps" />
/// <reference types="googlemaps" />
import React from 'react';
interface ClusterMarkerOptions extends google.maps.MarkerOptions {
    position: google.maps.LatLngLiteral;
    count: number;
}
declare const ClusterMarker: React.FC<ClusterMarkerOptions>;
export default ClusterMarker;
