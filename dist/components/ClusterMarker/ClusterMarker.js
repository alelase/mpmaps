import React from 'react';
import Marker from '../Marker/Marker';
var color = '#ff0000';
var svg = window.btoa("\n  <svg fill=\"" + color + "\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 240 240\">\n    <circle cx=\"120\" cy=\"120\" opacity=\".6\" r=\"70\" />\n    <circle cx=\"120\" cy=\"120\" opacity=\".3\" r=\"90\" />\n    <circle cx=\"120\" cy=\"120\" opacity=\".2\" r=\"110\" />\n  </svg>");
var ClusterMarker = function (_a) {
    var position = _a.position, count = _a.count;
    var clusterOptions = {
        icon: {
            url: "data:image/svg+xml;base64," + svg,
            scaledSize: new google.maps.Size(45, 45)
        },
        label: {
            text: String(count),
            color: 'rgba(255,255,255,0.9)',
            fontSize: '12px'
        },
        zIndex: Number(google.maps.Marker.MAX_ZINDEX)
    };
    return (React.createElement(Marker, { position: position, icon: clusterOptions.icon, label: clusterOptions.label, zIndex: clusterOptions.zIndex }));
};
export default ClusterMarker;
//# sourceMappingURL=ClusterMarker.js.map