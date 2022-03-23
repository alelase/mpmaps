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
import { MarkerClusterer as Clusterer } from '@googlemaps/markerclusterer';
import { useContext, useEffect, useRef } from 'react';
import MapContext from '../../contexts/MapContext';
var MarkerClusterer = function (_a) {
    var children = _a.children, options = __rest(_a, ["children"]);
    var map = useContext(MapContext);
    var clusterer = useRef();
    useEffect(function () {
        if (!map || !children)
            return;
        if (!clusterer.current)
            clusterer.current = new Clusterer(__assign(__assign({}, options), { markers: [], map: map }));
        var markers = children === null || children === void 0 ? void 0 : children.map(function (_a) {
            var props = _a.props;
            var marker = new window.google.maps.Marker({
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
//# sourceMappingURL=MarkerClusterer.js.map