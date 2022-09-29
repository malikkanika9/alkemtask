import "./login.css" 
import React, { useEffect } from "react"

import { useDispatch, useSelector } from "react-redux"
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { logger2, logoutAction } from "../Redux/Action";
import Button from 'react-bootstrap/Button';
import { Product } from "./Product";
import { Division } from "./Division";
import { Depot } from "./Depot";

export const Landing = () => {
    
    const navigate = useNavigate()
    const { token } = useSelector(state => state.token);
    console.log(token)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(logger2(token))
    }, [token])
    const logout = () => {
        dispatch(logoutAction())
        navigate("/")
    }
    return (
        <>
            <Button style={{justifyContent:"right", marginLeft:"1300px", backgroundColor:"#4b6cb7 " }} onClick={logout}>logout</Button> 
          <h1>Welcome to Landing Page</h1>
         <Product/> <Division/> <Depot/>
        </>
    )
}


