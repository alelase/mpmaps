import React from 'react';

import Marker from '../Marker/Marker';

const color = '#ff0000';

const svg = window.btoa(`
  <svg fill="${color}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
    <circle cx="120" cy="120" opacity=".6" r="70" />
    <circle cx="120" cy="120" opacity=".3" r="90" />
    <circle cx="120" cy="120" opacity=".2" r="110" />
  </svg>`);

interface ClusterMarkerOptions {
  position: google.maps.LatLngLiteral;
  count: number;
}

const ClusterMarker: React.FC<ClusterMarkerOptions> = ({ position, count }) => {
  const clusterOptions = {
    icon: {
      url: `data:image/svg+xml;base64,${svg}`,
      scaledSize: new google.maps.Size(45, 45)
    },
    label: {
      text: String(count),
      color: 'rgba(255,255,255,0.9)',
      fontSize: '12px'
    },
    zIndex: Number(google.maps.Marker.MAX_ZINDEX)
  };

  return (
    <Marker
      position={position}
      icon={clusterOptions.icon}
      label={clusterOptions.label}
      zIndex={clusterOptions.zIndex}
    />
  );
};

export default ClusterMarker;
