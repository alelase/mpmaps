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
                // { lat: 25.774, lng: -80.19 },
                // { lat: 18.466, lng: -66.118 },
                // { lat: 32.321, lng: -64.757 },
                // { lat: 25.774, lng: -80.19 }
                {
                    lat: 34.8700047,
                    lng: 32.3933703
                },
                {
                    lat: 34.8673439,
                    lng: 32.38605
                },
                {
                    lat: 34.865284,
                    lng: 32.3814112
                },
                {
                    lat: 34.8651123,
                    lng: 32.3778594
                },
                {
                    lat: 34.864254,
                    lng: 32.37409
                },
                {
                    lat: 34.863739,
                    lng: 32.3707554
                },
                {
                    lat: 34.8628807,
                    lng: 32.3672756
                },
                {
                    lat: 34.8625374,
                    lng: 32.3653182
                },
                {
                    lat: 34.8628807,
                    lng: 32.3646658
                },
                {
                    lat: 34.8630524,
                    lng: 32.3644483
                },
                {
                    lat: 34.8639965,
                    lng: 32.3629983
                },
                {
                    lat: 34.8664856,
                    lng: 32.3606783
                },
                {
                    lat: 34.8700047,
                    lng: 32.3584308
                },
                {
                    lat: 34.8732662,
                    lng: 32.3568357
                },
                {
                    lat: 34.875927,
                    lng: 32.3548781
                },
                {
                    lat: 34.8780727,
                    lng: 32.3525579
                },
                {
                    lat: 34.8786736,
                    lng: 32.3499476
                },
                {
                    lat: 34.8798752,
                    lng: 32.3493675
                },
                {
                    lat: 34.8893166,
                    lng: 32.3761921
                },
                {
                    lat: 34.8894882,
                    lng: 32.3777144
                },
                {
                    lat: 34.8894024,
                    lng: 32.3814112
                },
                {
                    lat: 34.8883724,
                    lng: 32.408806
                },
                {
                    lat: 34.8885441,
                    lng: 32.4094582
                },
                {
                    lat: 34.8827934,
                    lng: 32.4085162
                },
                {
                    lat: 34.8817635,
                    lng: 32.406922
                },
                {
                    lat: 34.8805618,
                    lng: 32.4059075
                },
                {
                    lat: 34.8760128,
                    lng: 32.4004
                },
                {
                    lat: 34.8700047,
                    lng: 32.3933703
                }
            ];
            // Construct the polygon.
            var bermudaTriangle = new google.maps.Polygon({
                paths: triangleCoords,
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