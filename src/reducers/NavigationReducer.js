import {
  VISIBILITY_CHANGED,
  TAB_CHANGED,
  LOGGED_OUT
} from '../actions/types';

export type Tab =
    'home'
  | 'myprofile'
  | 'sendthanks'
  | 'reports'
  | 'info'
  ;

export type Visibility = 'me' | 'myTeam' | 'global';

const INITIAL_STATE = {
  tab: 'home',
  visibility: 'global'
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TAB_CHANGED:
      console.log(action.tab);
    // action.payload === { props: 'name', value: 'jane' }
      return { ...state, tab: action.tab };  
    case VISIBILITY_CHANGED:
      return { ...state, visbility: action.visbility };
    case LOGGED_OUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};
