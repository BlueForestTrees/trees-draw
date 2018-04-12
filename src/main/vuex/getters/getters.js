import {isFinite} from 'lodash';

export default {
    activeMode: state => state.modes[state.activeFilm.f.config.activeModeIdx],
    activeMask: state => isFinite(state.activeFilm.f.config.activeMaskIdx) && state.activeFilm.f.masks[state.activeFilm.f.config.activeMaskIdx],
    activeMaskId: (state, getters) => getters.activeMask && getters.activeMask.e._id,
    visibleMasks: (state, getters) => getters.activeMask ? [getters.activeMask] : [],
    modeIs: (state, getters) => mode => getters.activeMode.name === mode,
    selection: state => state.activeFilm.f.selection.element,
    noSelection: (state, getters) => !getters.selection
}