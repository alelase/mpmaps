import React, { useEffect, useRef, useState } from 'react';

import MapContext from '../../contexts/MapContext';

import { useDeepCompareEffectForMaps } from './hooks/useDeepCompareEffectForMaps';

//import Marker = google.maps.Marker;

//import { MarkerClusterer } from '@googlemaps/markerclusterer';

interface MapProps extends google.maps.MapOptions {
  style: { [key: string]: string };
  onClick?: (e: google.maps.MapMouseEvent) => void;
  onIdle?: (map: google.maps.Map) => void;
  onBoundsChanged?: (bounds: google.maps.LatLngBounds | undefined) => void;
  onZoomChanged?: (zoom: number | undefined) => void;
  mapId?: string;
  //markers?: Marker[];
}

const Map: React.FC<MapProps> = ({
  onClick,
  onIdle,
  onBoundsChanged,
  onZoomChanged,
  children,
  style,
  mapId,
  //markers,
  ...options
}) => {
  // [START maps_react_map_component_add_map_hooks]
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, { mapId: mapId }));
    }
  }, [ref, map]);
  // [END maps_react_map_component_add_map_hooks]

  // [START maps_react_map_component_options_hook]
  // because React does not do deep comparisons, a custom hook is used
  // see discussion in https://github.com/googlemaps/js-samples/issues/946
  useDeepCompareEffectForMaps(() => {
    if (map) {
      map.setOptions(options);
    }
  }, [map, options]);
  // [END maps_react_map_component_options_hook]

  // [START maps_react_map_component_event_hooks]
  useEffect(() => {
    if (map) {
      ['click', 'idle', 'bounds_changed'].forEach((eventName) =>
        google.maps.event.clearListeners(map, eventName)
      );

      if (onClick) {
        map.addListener('click', onClick);
      }

      if (onIdle) {
        map.addListener('idle', () => onIdle(map));
      }

      if (onBoundsChanged) {
        map.addListener('bounds_changed', () => {
          onBoundsChanged(map.getBounds());
        });
      }

      if (onZoomChanged) {
        map.addListener('zoom_changed', () => {
          onZoomChanged(map.getZoom());
        });
      }

      //if (markers && markers.length && markers.length > 0) {
      // Add a marker clusterer to manage the markers.
      //console.log('Add cluster to markers:', markers);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      //new MarkerClusterer({ markers, map });
      // let markerCluster = new MarkerClusterer(map, markers, {
      //   imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
      //   gridSize: 10,
      //   minimumClusterSize: 2
      // })
      //}
    }
  }, [map, onClick, onIdle, onBoundsChanged, onZoomChanged]);
  // [END maps_react_map_component_event_hooks]

  // [START maps_react_map_component_return]
  return (
    <MapContext.Provider value={map}>
      <div ref={ref} style={style} />
      {children}
    </MapContext.Provider>
  );
  // [END maps_react_map_component_return]
};

export default Map;
