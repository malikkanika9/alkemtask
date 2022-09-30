import { BEARER, LOGOUT, TOKEN  } from "./Action";
const init = {token:"",
    bearer_data:""
}
export const reducer = (store=init, { type, payload }) => {
  switch (type) {
    case TOKEN:
      return { ...store, token: payload };
    case BEARER:
        return {
            ...store,
            bearer_data:payload
        }
    case LOGOUT:
        return{
            ...store,
            token:"",
            bearer_data:""
        }
        default:
      return store;
  }
};
