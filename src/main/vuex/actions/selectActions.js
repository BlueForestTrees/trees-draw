import On from "../../const/on";
import {getTranslation, globalToLocal, minus} from "../../util/util";
import Vue from 'vue';
import {createSelection} from "../state/state";
import Do from "../../const/do";
import modes from "../../const/modes";
import {getElement} from "../../util/common";

export default {
    [On.START_SELECT]: ({commit}, {evt, film, domRef}) => {
        const currentElementSvg = evt.target;
        if (currentElementSvg.id && currentElementSvg.id !== "surface") {
            const ctx = {
                domRef,
                selection: film.f.selection,
                element: getElement(film, currentElementSvg.id),
                downMouse: globalToLocal(evt, domRef),
                initialTxy: getTranslation(domRef.svg.getElementById(currentElementSvg.id), domRef)
            };
            ctx.onmousemove = selectMove.bind(null, ctx);
            ctx.onmouseup = selectUp.bind(null, ctx);

            commit(Do.SET_SELECTION_ELEMENT, {film, elementId: currentElementSvg.id});

            Vue.nextTick(() => {
                window.addEventListener("mousemove", ctx.onmousemove);
                window.addEventListener("mouseup", ctx.onmouseup);
            });
        } else {
            film.f.selection = createSelection();
        }
    },
    [On.PICK_PEN]: ({commit}, ei) => {
        commit(Do.PICK_PEN, Object.assign({}, ei.e.pen));
        commit(Do.SET_MODE, modes.BRUSH);
    }
}

const selectMove = ({selection, element, domRef, downMouse, initialTxy}, e) => {
    const move = minus(globalToLocal(e, domRef), downMouse);
    selection.box.tx = element.tx = initialTxy.tx + move.x;
    selection.box.ty = element.ty = initialTxy.ty + move.y;
};

const selectUp = (ctx) => {
    window.removeEventListener("mousemove", ctx.onmousemove);
    window.removeEventListener("mouseup", ctx.onmouseup);
};

