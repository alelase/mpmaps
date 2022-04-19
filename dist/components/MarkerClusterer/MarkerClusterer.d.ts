import { MarkerClustererOptions } from '@googlemaps/markerclusterer';
import React from 'react';
declare type MarkerClustererProps = MarkerClustererOptions & {
    children?: Array<React.ReactElement>;
};
export declare const MarkerClustererComponent: React.FC<MarkerClustererProps>;
export {};
