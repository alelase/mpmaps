import React, { useContext, useEffect } from 'react';

import MapContext from '../../contexts/MapContext';

const GeoJson: React.FC<any> = ({ url, json }) => {
  const map = useContext(MapContext);

  useEffect(() => {
    if (!map) return;
    map.data.forEach((feature) => map.data.remove(feature));
    if (url) map.data.loadGeoJson(url);
    else if (json) map.data.addGeoJson(json);
  }, [map, url, json]);

  return null;
};

export default GeoJson;
