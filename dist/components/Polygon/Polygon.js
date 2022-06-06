var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { useContext, useEffect, useState } from 'react';
import MapContext from '../../contexts/MapContext';
var Polygon = function (_a) {
    var onClick = _a.onClick, options = __rest(_a, ["onClick"]);
    var _b = useState(), polygon = _b[0], setPolygon = _b[1];
    var map = useContext(MapContext);
    useEffect(function () {
        if (!polygon) {
            setPolygon(new google.maps.Polygon({
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                hasClickAttribute: false,
                hasDoubleClickAttribute: false
            }));
        }
        // remove marker from map on unmount
        return function () {
            if (polygon) {
                polygon.setMap(null);
            }
        };
    }, [polygon]);
    useEffect(function () {
        if (polygon) {
            // polygon.setOptions({
            //   ...options,
            //   map
            // });
            // Define the LatLng coordinates for the polygon's path.
            var triangleCoords = [
                { lat: 25.774, lng: -80.19 },
                { lat: 18.466, lng: -66.118 },
                { lat: 32.321, lng: -64.757 },
                { lat: 25.774, lng: -80.19 }
            ];
            // Construct the polygon.
            var bermudaTriangle = new google.maps.Polygon({
                paths: triangleCoords,
                strokeColor: '#FF0000',
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: '#FF0000',
                fillOpacity: 0.35
            });
            // @ts-ignore
            bermudaTriangle.setMap(map);
        }
    }, [polygon, options]);
    return null;
};
export default Polygon;
//# sourceMappingURL=Polygon.js.map