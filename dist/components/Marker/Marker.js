var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { useContext, useEffect, useState } from 'react';
import MapContext from '../../contexts/MapContext';
var Marker = function (options) {
    var _a = useState(), marker = _a[0], setMarker = _a[1];
    var map = useContext(MapContext);
    useEffect(function () {
        if (!marker) {
            setMarker(new google.maps.Marker());
        }
        // remove marker from map on unmount
        return function () {
            if (marker) {
                marker.setMap(null);
            }
        };
    }, [marker]);
    useEffect(function () {
        if (marker) {
            marker.setOptions(__assign(__assign({}, options), { map: map }));
        }
    }, [marker, options]);
    return null;
};
export default Marker;
//# sourceMappingURL=Marker.js.map