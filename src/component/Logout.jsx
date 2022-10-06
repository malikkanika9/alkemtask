import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { logger } from "../redux/Action";


 export const logout = () => {
    const navigate=useNavigate()
    const dispatch = useDispatch();
const {token} = useSelector((store) => store.token);
    console.log(token);
    useEffect(()=>{
        localStorage.removeItem('token');
if(!token){
navigate("/")
}
    },[token])

   

   return (
      <>
     
      </>
   );
};