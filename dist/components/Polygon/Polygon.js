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
            // const myCoordinates = [
            //   new google.maps.LatLng(32.365923, 34.962655),
            //   new google.maps.LatLng(32.291656, 34.863778),
            //   new google.maps.LatLng(32.259145, 35.050546),
            //   new google.maps.LatLng(32.375202, 35.088998)
            // ];
            var myCoordinates = [
                new google.maps.LatLng(32.175369, 34.885525),
                new google.maps.LatLng(32.235212, 34.883465),
                new google.maps.LatLng(32.238697, 34.860806),
                new google.maps.LatLng(32.236954, 34.850506),
                new google.maps.LatLng(32.222433, 34.842953),
                new google.maps.LatLng(32.225338, 34.840206),
                new google.maps.LatLng(32.22708, 34.83128),
                new google.maps.LatLng(32.217786, 34.836773),
                new google.maps.LatLng(32.203843, 34.834027),
                new google.maps.LatLng(32.194546, 34.830593),
                new google.maps.LatLng(32.178856, 34.853253),
                new google.maps.LatLng(32.173625, 34.865612)
            ];
            // Define the LatLng coordinates for the polygon's path.
            // { lat: 25.774, lng: -80.19 },
            // { lat: 18.466, lng: -66.118 },
            // { lat: 32.321, lng: -64.757 },
            // { lat: 25.774, lng: -80.19 }
            // const triangleCoords = [
            //   { lat: 34.925, lng: 32.279 },
            //   { lat: 34.825, lng: 32.208 },
            //   { lat: 34.973, lng: 32.195 },
            //   { lat: 34.925, lng: 32.279 }
            // ];
            // Construct the polygon.
            var bermudaTriangle = new google.maps.Polygon({
                paths: myCoordinates,
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
//# sourceMappingURL=Polygon.js.map