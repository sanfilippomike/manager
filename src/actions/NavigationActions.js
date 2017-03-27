import { TAB_CHANGED, VISIBILITY_CHANGED } from './types';

export const tabChanged = (tab) => {
	return {
		type: TAB_CHANGED,
		tab
	};
};

export const visibilityChanegd = (visibility) => {
	return {
		type: VISIBILITY_CHANGED,
		visibility
	};
};
