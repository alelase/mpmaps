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
import { useContext, useEffect, useState } from 'react';
import MapContext from '../../contexts/MapContext';
var Marker = function (_a) {
    var onClick = _a.onClick, onDoubleClick = _a.onDoubleClick, infoWindowContent = _a.infoWindowContent, showInfoWindow = _a.showInfoWindow, options = __rest(_a, ["onClick", "onDoubleClick", "infoWindowContent", "showInfoWindow"]);
    var _b = useState(), marker = _b[0], setMarker = _b[1];
    var _c = useState(null), prevInfoWindow = _c[0], setPrevInfoWindow = _c[1];
    var map = useContext(MapContext);
    useEffect(function () {
        if (!marker) {
            setMarker(new google.maps.Marker({
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                hasClickAttribute: false,
                hasDoubleClickAttribute: false
            }));
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
            google.maps.event.clearInstanceListeners(marker);
        }
        if (marker && onClick) {
            console.log('add click listener to vehicle!');
            marker['hasClickAttribute'] = true;
            if (prevInfoWindow) {
                // setTimeout(() => {
                //   eslint-disable-next-line @typescript-eslint/ban-ts-comment
                //   @ts-ignore
                prevInfoWindow.close();
                // }, 3000);
            }
            marker.addListener('click', function () {
                var infoWindow = new google.maps.InfoWindow({
                    content: infoWindowContent,
                    disableAutoPan: true
                });
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                setPrevInfoWindow(infoWindow);
                if (showInfoWindow) {
                    infoWindow.open({
                        anchor: marker,
                        map: map,
                        shouldFocus: false
                    });
                }
                setTimeout(function () {
                    infoWindow === null || infoWindow === void 0 ? void 0 : infoWindow.close();
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
    useEffect(function () {
        if (marker) {
            marker.setOptions(__assign(__assign({}, options), { map: map }));
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
//# sourceMappingURL=Marker.js.map