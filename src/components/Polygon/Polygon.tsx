import React, { useContext, useEffect, useState } from 'react';

import MapContext from '../../contexts/MapContext';

const Polygon: React.FC<
  google.maps.PolygonOptions & {
    onClick?: () => void;
  }
> = ({ onClick, ...options }) => {
  const [polygon, setPolygon] = useState<google.maps.Polygon>();
  const map = useContext(MapContext);

  useEffect(() => {
    if (!polygon) {
      setPolygon(
        new google.maps.Polygon({
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          hasClickAttribute: false,
          hasDoubleClickAttribute: false
        })
      );
    }

    // remove marker from map on unmount
    return () => {
      if (polygon) {
        polygon.setMap(null);
      }
    };
  }, [polygon]);

  useEffect(() => {
    if (polygon) {
      // polygon.setOptions({
      //   ...options,
      //   map
      // });

      // Define the LatLng coordinates for the polygon's path.
      const triangleCoords = [
        { lat: 25.774, lng: -80.19 },
        { lat: 18.466, lng: -66.118 },
        { lat: 32.321, lng: -64.757 },
        { lat: 25.774, lng: -80.19 }
      ];

      // Construct the polygon.
      const bermudaTriangle = new google.maps.Polygon({
        paths: triangleCoords,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35
      });

      // @ts-ignore
      bermudaTriangle.setMap(map);
    }
  }, [polygon, options]);

  return null;
};

export default Polygon;
