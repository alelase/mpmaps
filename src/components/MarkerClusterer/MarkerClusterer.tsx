import {
  MarkerClusterer as Clusterer,
  MarkerClustererOptions
} from '@googlemaps/markerclusterer';
import React, { useContext, useEffect, useRef } from 'react';

import MapContext from '../../contexts/MapContext';

type MarkerClustererProps = MarkerClustererOptions & {
  children?: Array<React.ReactElement>;
};

const MarkerClusterer: React.FC<MarkerClustererProps> = ({
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

    const _markers = children.map(({ props }) => {
      const marker = new window.google.maps.Marker({
        position: props.position,
        label: props.label
      });

      return marker;
    });

    clusterer.current?.clearMarkers(true);
    setMarkers(_markers);
  }, [children]);

  useEffect(() => {
    clusterer.current?.addMarkers(markers);
  }, [markers]);

  return null;
};

export default MarkerClusterer;
