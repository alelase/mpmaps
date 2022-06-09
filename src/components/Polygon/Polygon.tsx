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

      const myCoordinates = [
        new google.maps.LatLng(32.365923, 34.962655),
        new google.maps.LatLng(32.291656, 34.863778),
        new google.maps.LatLng(32.259145, 35.050546),
        new google.maps.LatLng(32.375202, 35.088998)
      ];

      // Define the LatLng coordinates for the polygon's path.
      // { lat: 25.774, lng: -80.19 },
      // { lat: 18.466, lng: -66.118 },
      // { lat: 32.321, lng: -64.757 },
      // { lat: 25.774, lng: -80.19 }
      // const triangleCoords = [
      //   { lat: 34.925, lng: 32.279 },
      //   { lat: 34.825, lng: 32.208 },
      //   { lat: 34.973, lng: 32.195 },
      //   { lat: 34.925, lng: 32.279 }
      // ];

      // Construct the polygon.
      const bermudaTriangle = new google.maps.Polygon({
        paths: myCoordinates,
        strokeColor: '#3467ab',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#78a0b9',
        fillOpacity: 0.35
      });

      // @ts-ignore
      bermudaTriangle.setMap(map);
    }
  }, [polygon, options]);

  return null;
};

export default Polygon;
