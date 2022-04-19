import {
  MarkerClusterer as Clusterer,
  MarkerClustererOptions
} from '@googlemaps/markerclusterer';
import React, { useContext, useEffect, useRef } from 'react';

import MapContext from '../../contexts/MapContext';

type MarkerClustererProps = MarkerClustererOptions & {
  children?: Array<React.ReactElement>;
};

export const MarkerClustererComponent: React.FC<MarkerClustererProps> = ({
  children,
  ...options
}) => {
  const map = useContext(MapContext);
  const clusterer = useRef<Clusterer | undefined>();
  const [markers, setMarkers] = React.useState<Array<google.maps.Marker>>([]);

  useEffect(() => {
    if (!map) return;

    if (!clusterer.current)
      clusterer.current = new Clusterer({
        ...options,
        markers: [],
        map
      });
  }, [map]);

  useEffect(() => {
    if (!children) return;

    // If children doe not equal markers, update markers
    clusterer.current?.clearMarkers(true);
    setMarkers(markers);
  }, [children]);

  useEffect(() => {
    const _markers = markers.map((props) => {
      const marker = new window.google.maps.Marker({
        ...props
      });

      return marker;
    });

    clusterer.current?.addMarkers(_markers);
  }, [markers]);

  return null;
};
