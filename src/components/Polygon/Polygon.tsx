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
        // { lat: 25.774, lng: -80.19 },
        // { lat: 18.466, lng: -66.118 },
        // { lat: 32.321, lng: -64.757 },
        // { lat: 25.774, lng: -80.19 }
        {
          lng: 34.810524,
          lat: 32.1122407
        },
        {
          lng: 34.8124123,
          lat: 32.1078786
        },
        {
          lng: 34.8173904,
          lat: 32.1039526
        },
        {
          lng: 34.8386765,
          lat: 32.1011897
        },
        {
          lng: 34.8676872,
          lat: 32.1064246
        },
        {
          lng: 34.8936081,
          lat: 32.1116591
        },
        {
          lng: 34.9257088,
          lat: 32.1097689
        },
        {
          lng: 34.9346352,
          lat: 32.107297
        },
        {
          lng: 34.9341202,
          lat: 32.1263433
        },
        {
          lng: 34.9327469,
          lat: 32.132885
        },
        {
          lng: 34.9354935,
          lat: 32.1527979
        },
        {
          lng: 34.9342918,
          lat: 32.1573031
        },
        {
          lng: 34.9279404,
          lat: 32.1628254
        },
        {
          lng: 34.9136925,
          lat: 32.1676208
        },
        {
          lng: 34.9008179,
          lat: 32.1693645
        },
        {
          lng: 34.8867416,
          lat: 32.1724159
        },
        {
          lng: 34.8663139,
          lat: 32.1716894
        },
        {
          lng: 34.8594475,
          lat: 32.174886
        },
        {
          lng: 34.8534393,
          lat: 32.1785184
        },
        {
          lng: 34.842453,
          lat: 32.1854922
        },
        {
          lng: 34.8355865,
          lat: 32.1915938
        },
        {
          lng: 34.8324966,
          lat: 32.1918844
        },
        {
          lng: 34.8299217,
          lat: 32.1901411
        },
        {
          lng: 34.8252869,
          lat: 32.1777919
        },
        {
          lng: 34.8158455,
          lat: 32.1584657
        },
        {
          lng: 34.8098373,
          lat: 32.1398623
        },
        {
          lng: 34.810524,
          lat: 32.1122407
        }
      ];

      // Construct the polygon.
      const bermudaTriangle = new google.maps.Polygon({
        paths: triangleCoords,
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
