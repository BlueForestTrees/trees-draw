import Do from "../../const/do";
import {findIndex} from 'lodash';

export default {
    [Do.ADD_FILM]: (state, film) => {
        state.films.push(film);
    },
    [Do.SELECT_FILM]: (state, film) => {
        state.activeFilm = film;
    },
    [Do.SELECT_PEN]: (state, pen) => {
        state.activePen = pen;
    },
    [Do.SET_MODE]: (state, mode) => {
        state.activeFilm.f.config.activeModeIdx = findIndex(state.panels, {name: mode});
    }
};
