import { useEffect } from 'react';
import { useDeepCompareMemoize } from './useDeepCompareMemoize';
export function useDeepCompareEffectForMaps(callback, dependencies) {
    useEffect(callback, dependencies.map(useDeepCompareMemoize));
}
//# sourceMappingURL=useDeepCompareEffectForMaps.js.map