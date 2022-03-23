import { MarkerClustererOptions } from '@googlemaps/markerclusterer';
import React from 'react';
declare type MarkerClustererProps = MarkerClustererOptions & {
    children?: Array<React.ReactElement>;
};
declare const MarkerClusterer: React.FC<MarkerClustererProps>;
export default MarkerClusterer;
