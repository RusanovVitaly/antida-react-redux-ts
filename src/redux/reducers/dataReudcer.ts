import { SET_ARTISTS,SET_ALBUMS} from "../types";


interface IState {
    data:any,
    albums:any
}
interface IAction{
        type:string,
        payload:any
}
const initialState:IState = {
    data:[],
    albums:[]
}

export const dataReducer = (state = initialState,action:IAction) => {
    switch (action.type){
        case SET_ARTISTS:
            return {...state,data:action.payload}
        case SET_ALBUMS:
            return {...state,albums:action.payload}
        default:return state
    }
}