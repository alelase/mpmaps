import React, { useContext, useEffect, useState } from 'react';

import MapContext from '../../contexts/MapContext';

const Marker: React.FC<
  google.maps.MarkerOptions & {
    onClick?: () => void;
    onDoubleClick?: () => void;
    infoWindowContent?: string;
    showInfoWindow?: boolean;
  }
> = ({
  onClick,
  onDoubleClick,
  infoWindowContent,
  showInfoWindow,
  ...options
}) => {
  const [marker, setMarker] = useState<google.maps.Marker>();
  const [prevInfoWindow, setPrevInfoWindow] = useState(null);

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
    if (marker) {
      google.maps.event.clearInstanceListeners(marker);
    }

    if (marker && onClick) {
      console.log('add click listener to vehicle!');
      marker['hasClickAttribute'] = true;

      if (prevInfoWindow) {
        setTimeout(() => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          prevInfoWindow.close();
        }, 3000);
      }

      marker.addListener('click', () => {
        const infoWindow = new google.maps.InfoWindow({
          content: infoWindowContent,
          disableAutoPan: true
        });
        // @ts-ignore
        setPrevInfoWindow(infoWindow);

        if (showInfoWindow) {
          infoWindow.open({
            anchor: marker,
            map,
            shouldFocus: false
          });
        }

        setTimeout(() => {
          infoWindow?.close();
        }, 3000);

        //call callback function
        onClick();
      });
    }

    if (marker && onDoubleClick) {
      console.log('add dblclick listener to vehicle!');
      marker['hasDoubleClickAttribute'] = true;
      marker.addListener('dblclick', onDoubleClick);
    }
  }, [onClick, onDoubleClick, marker]);

  useEffect(() => {
    if (marker) {
      marker.setOptions({
        ...options,
        map
      });
    }
  }, [marker, options]);

  // useEffect(() => {
  //   if (!showInfoWindow) return;
  //
  //   const infoWindow = new google.maps.InfoWindow({
  //     content: infoWindowContent,
  //     disableAutoPan: true
  //   });
  //
  //   // @ts-ignore
  //   setPrevInfoWindow(infoWindow);
  //
  //   infoWindow.open({
  //     anchor: marker,
  //     map,
  //     shouldFocus: false
  //   });
  //
  //   setTimeout(() => {
  //     infoWindow?.close();
  //   }, 3000);
  //
  //   return () => infoWindow?.close();
  // }, [showInfoWindow, infoWindowContent, marker, map]);

  return null;
};

export default Marker;
