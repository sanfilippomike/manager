import { SWITCH_TAB, SWITCH_VISIBILITY } from './types';

type Tab = 'home' | 'myprofile' | 'sendthanks' | 'reports' | 'info';

export const switchTab = (tab: Tab) => {
	return {
		type: SWITCH_TAB,
		tab,
	};
};

export const switchVisibility = (visibility: 'me' | 'myTeam' | 'global') => {
	return {
		type: SWITCH_VISIBILITY,
		visibility,
	};
};
