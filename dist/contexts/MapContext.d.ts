/// <reference types="google.maps" />
/// <reference types="react" />
declare const MapContext: import("react").Context<google.maps.Map | null | undefined>;
export default MapContext;
