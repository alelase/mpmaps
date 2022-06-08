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
          lat: 34.7597122,
          lng: 32.0325275
        },
        {
          lat: 34.7622871,
          lng: 32.0133161
        },
        {
          lat: 34.7581673,
          lng: 31.9901698
        },
        {
          lat: 34.7559357,
          lng: 31.9775024
        },
        {
          lat: 34.756794,
          lng: 31.9699302
        },
        {
          lat: 34.7593689,
          lng: 31.9595902
        },
        {
          lat: 34.7586823,
          lng: 31.9549296
        },
        {
          lat: 34.7854614,
          lng: 31.9604641
        },
        {
          lat: 34.7856331,
          lng: 31.9633768
        },
        {
          lat: 34.7900963,
          lng: 31.9719689
        },
        {
          lat: 34.7926712,
          lng: 31.9761918
        },
        {
          lat: 34.7995377,
          lng: 31.9939551
        },
        {
          lat: 34.8021126,
          lng: 31.997158
        },
        {
          lat: 34.8046875,
          lng: 31.998905
        },
        {
          lat: 34.8062325,
          lng: 32.0006519
        },
        {
          lat: 34.8088074,
          lng: 32.0029811
        },
        {
          lat: 34.8120689,
          lng: 32.0058925
        },
        {
          lat: 34.8144722,
          lng: 32.009386
        },
        {
          lat: 34.8077774,
          lng: 32.0179738
        },
        {
          lat: 34.8007393,
          lng: 32.0252509
        },
        {
          lat: 34.7935295,
          lng: 32.0301991
        },
        {
          lat: 34.7823715,
          lng: 32.03602
        },
        {
          lat: 34.778595,
          lng: 32.0379118
        },
        {
          lat: 34.7751617,
          lng: 32.0358745
        },
        {
          lat: 34.7715569,
          lng: 32.0352924
        },
        {
          lat: 34.7677803,
          lng: 32.0363111
        },
        {
          lat: 34.7648621,
          lng: 32.0368932
        },
        {
          lat: 34.7631454,
          lng: 32.0380573
        },
        {
          lat: 34.7609138,
          lng: 32.0366021
        },
        {
          lat: 34.7595406,
          lng: 32.0347104
        },
        {
          lat: 34.7591972,
          lng: 32.0332551
        },
        {
          lat: 34.7595406,
          lng: 32.032673
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
