import React, { useContext, useEffect, useState } from 'react';

import MapContext from '../../contexts/MapContext';

const Marker: React.FC<
  google.maps.MarkerOptions & {
    onClick?: () => void;
    onDoubleClick?: () => void;
    infoWindowContent?: string;
    showInfoWindow?: boolean;
    hasClickAttribute?: boolean;
    hasDoubleClickAttribute?: boolean;
  }
> = ({
  onClick,
  onDoubleClick,
  infoWindowContent,
  showInfoWindow,
  ...options
}) => {
  const [marker, setMarker] = useState<google.maps.Marker>();
  const map = useContext(MapContext);

  useEffect(() => {
    if (!marker) {
      setMarker(
        new google.maps.Marker({
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          hasClickAttribute: false,
          hasDoubleClickAttribute: false
        })
      );
    }

    // remove marker from map on unmount
    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  useEffect(() => {
    if (marker && onClick) {
      console.log('add click listener!!!');
      marker.addListener('click', onClick);
    }

    if (marker && onDoubleClick && !marker['hasDoubleClickAttribute']) {
      console.log('add dblclick listener!!!');
      marker['hasDoubleClickAttribute'] = true;
      //if(marker.hasDblclickAttribute)
      marker.addListener('dblclick', onDoubleClick);
    }
  }, [onClick, onDoubleClick]);

  useEffect(() => {
    if (marker) {
      marker.setOptions({
        ...options,
        map
      });
    }
  }, [marker, options]);

  useEffect(() => {
    if (!showInfoWindow) return;

    const infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent,
      disableAutoPan: true
    });

    infoWindow.open({
      anchor: marker,
      map,
      shouldFocus: false
    });

    return () => infoWindow.close();
  }, [showInfoWindow, infoWindowContent, marker, map]);

  return null;
};

export default Marker;
