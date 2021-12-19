/// <reference types="google.maps" />
/// <reference types="googlemaps" />
import React from 'react';
interface ClusterMarkerOptions {
    position: google.maps.LatLngLiteral;
    count: number;
}
declare const ClusterMarker: React.FC<ClusterMarkerOptions>;
export default ClusterMarker;
