import axios from "axios"
export const TOKEN = "TOKEN";
export const BEARER ="BEARER"
export const LOGOUT = "LOGOUT"

export const token =(data)=>{
    return {
        type:TOKEN,
        payload:data
    }
    }

export const bearer_action =(data)=>({
    type: BEARER,
    payload:data
})
    export const logger = (details)=> async(dispatch)=>{
        axios.post('https://alkemapi.indusnettechnologies.com/api/employee/login', details)
              .then(function (response) {
                console.log(response.data);
                dispatch(token(response.data))
              }).catch((error) => {
                console.log(error);
            });
    
    }  
    export const logger2 = (details)=> async(dispatch)=>{
        axios.get('https://alkemapi.indusnettechnologies.com/api/cms/banner/E', 
                { headers: {"Authorization" : `Bearer ${details}`}})
              .then(function (response) {
                console.log(response.data);
                dispatch(bearer_action(response.data))
              }).catch((error) => {
                console.log(error);
            });
    
    }  

    export const logoutAction =()=>(dispatch)=>{
        localStorage.clear()
        dispatch({type:LOGOUT})
    }