import surfaceActions from "./editActions";
import playerActions from "./playerActions";
import drawActions from "./drawActions";
import selectActions from "./selectActions";
import maskActions from "./maskActions";
import On from "../../const/on";
import Do from "../../const/do";
import zoomActions from "./zoomActions";

export default {
    [On.MOUNT_APP]: async ({commit, dispatch}) => {
        commit(Do.ACTIVATE_FIRST_PEN);
        dispatch(On.ACTIVATE_NEW_FILM);
    },
    ...surfaceActions,
    ...playerActions,
    ...drawActions,
    ...selectActions,
    ...maskActions,
    ...zoomActions
}