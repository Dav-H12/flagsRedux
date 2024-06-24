const GET_ONE = "get-one";

export const NameState = {
  country: [],
};

export const Namereducer = (state = NameState, action) => {
  switch (action.type) {
    case GET_ONE:
      return {
        ...state,
        country: action.payload,
      };

    default:
      return state;
  }
};


export const getOneCountry = (name)=>{
    return{type : GET_ONE ,payload :name}
}






