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

  useEffect(() => {
    if (!map || !children) return;

    if (!clusterer.current)
      clusterer.current = new Clusterer({ ...options, markers: [], map });

    const markers = children?.map(({ props }) => {
      const marker = new window.google.maps.Marker({
        position: props.position
      });

      return marker;
    });

    clusterer.current.clearMarkers();
    clusterer.current.addMarkers(markers);
  }, [map, children]);

  return null;
};

export default MarkerClusterer;
