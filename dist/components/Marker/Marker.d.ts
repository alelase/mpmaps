/// <reference types="google.maps" />
/// <reference types="googlemaps" />
import React from 'react';
declare const Marker: React.FC<google.maps.MarkerOptions & {
    onClick?: () => void;
    onDoubleClick?: () => void;
    infoWindowContent?: string;
    showInfoWindow?: boolean;
    hasClickAttribute?: boolean;
    hasDoubleClickAttribute?: boolean;
}>;
export default Marker;
