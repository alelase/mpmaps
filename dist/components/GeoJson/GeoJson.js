import { useContext, useEffect } from 'react';
import MapContext from '../../contexts/MapContext';
var GeoJson = function (_a) {
    var url = _a.url, json = _a.json;
    var map = useContext(MapContext);
    useEffect(function () {
        if (!map)
            return;
        map.data.forEach(function (feature) { return map.data.remove(feature); });
        if (url)
            map.data.loadGeoJson(url);
        else if (json)
            map.data.addGeoJson(json);
    }, [map, url, json]);
    return null;
};
export default GeoJson;
//# sourceMappingURL=GeoJson.js.map