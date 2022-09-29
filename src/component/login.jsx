import "./login.css" 
import { Formik } from "formik";
import * as Yup from "yup";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logger } from "../Redux/Action";
import {  useNavigate } from "react-router-dom";

export const Login =()=>{
    const schema = Yup.object().shape({
        email: Yup.string()
                  .required("Email is a required ")
          .email("Invalid email format")
          .trim("white space not allowed ")
        .strict(),
        
        password: Yup.string()
        .trim('white space not allowed')
        .strict()
          .required("Password is a required ")
          .min(8, "Password must be at least 8 characters"),
      });

        const navigate=useNavigate()
        const dispatch = useDispatch();
const {token} = useSelector((store) => store.token);
        console.log(token);
        useEffect(()=>{
if(token){
    navigate("/Landing")
}
        },[token])

    return(
        <>
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          console.log(values)
          dispatch(logger(values));
         
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
              handleBlur,
      
        }) => (
          <div className="login">
            <div className="form">
              <form noValidate onSubmit={handleSubmit}>
                <span>Login</span>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Enter email id "
                  className="form-control inp_text"
                  id="email"
                />
             <p className="error">
                  {errors.email && touched.email && errors.email}
                  
                </p>
             <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter password"
                  className="form-control"
                />
    
                <p className="error">
                  {errors.password && touched.password && errors.password}
                </p>
                
                <button type="submit"  onClick={handleSubmit}>Login</button>
              </form>
            </div>
          </div>
        )}
      </Formik>
  
    </>
    )
}