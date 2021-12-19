import { createCustomEqual } from 'fast-equals';
import { useRef } from 'react';
function isLatLngLiteral(obj) {
    return (typeof obj === 'object' &&
        Number.isFinite(obj.lat) &&
        Number.isFinite(obj.lng));
}
var deepCompareEqualsForMaps = createCustomEqual(function (deepEqual) { return function (a, b) {
    if (isLatLngLiteral(a) ||
        a instanceof google.maps.LatLng ||
        isLatLngLiteral(b) ||
        b instanceof google.maps.LatLng) {
        return new google.maps.LatLng(a).equals(new google.maps.LatLng(b));
    }
    // TODO extend to other types
    // use fast-equals for other objects
    return deepEqual(a, b);
}; });
export function useDeepCompareMemoize(value) {
    var ref = useRef();
    if (!deepCompareEqualsForMaps(value, ref.current)) {
        ref.current = value;
    }
    return ref.current;
}
//# sourceMappingURL=useDeepCompareMemoize.js.map