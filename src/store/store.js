import { createStore } from "redux";
import { combineReducers } from "redux";
import { FlagsReducer } from "../api/flagsReducer";
import { Namereducer } from "../api/NameReducer";
import { Regionreducer } from "../api/regionReducer";
const reducer = combineReducers({
     FlagsData : FlagsReducer ,
     NameData  : Namereducer ,
     RegionData : Regionreducer
})



const store = createStore(reducer)

export default store;