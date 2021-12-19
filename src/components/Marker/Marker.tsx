import React, { useContext, useEffect, useState } from 'react';

import MapContext from '../../contexts/MapContext';

const Marker: React.FC<google.maps.MarkerOptions> = (options) => {
  const [marker, setMarker] = useState<google.maps.Marker>();
  const map = useContext(MapContext);

  useEffect(() => {
    if (!marker) {
      setMarker(new google.maps.Marker());
    }

    // remove marker from map on unmount
    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  useEffect(() => {
    if (marker) {
      marker.setOptions({
        ...options,
        map
      });
    }
  }, [marker, options]);

  return null;
};

export default Marker;
