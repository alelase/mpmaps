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

      // const myCoordinates = [
      //   new google.maps.LatLng(32.365923, 34.962655),
      //   new google.maps.LatLng(32.291656, 34.863778),
      //   new google.maps.LatLng(32.259145, 35.050546),
      //   new google.maps.LatLng(32.375202, 35.088998)
      // ];

      const myCoordinates = [
        new google.maps.LatLng(32.175369, 34.885525),
        new google.maps.LatLng(32.235212, 34.883465),
        new google.maps.LatLng(32.238697, 34.860806),
        new google.maps.LatLng(32.236954, 34.850506),
        new google.maps.LatLng(32.222433, 34.842953),
        new google.maps.LatLng(32.225338, 34.840206),
        new google.maps.LatLng(32.22708, 34.83128),
        new google.maps.LatLng(32.217786, 34.836773),
        new google.maps.LatLng(32.203843, 34.834027),
        new google.maps.LatLng(32.194546, 34.830593),
        new google.maps.LatLng(32.178856, 34.853253),
        new google.maps.LatLng(32.173625, 34.865612)
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
        fillColor: 'rgba(13, 56, 240, 0.4)',
        fillOpacity: 0.3
      });

      // @ts-ignore
      bermudaTriangle.setMap(map);
    }
  }, [polygon, options]);

  return null;
};

export default Polygon;
