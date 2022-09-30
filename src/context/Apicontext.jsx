import React, { createContext, useState } from "react";

export const ApiiContext =createContext();

export function ApiiContextProvider({children}){
    const [code,setCode]=useState("");
    const [divisionCode,setDivisionCode]=useState("");
    const [DepotCode,setDepotCode]=useState("");
    const [DataShow,setDataShow]= useState(false);
    const [depotDataRemove,setdepotDataRemove]=useState(false)
    const [divisionDataRemove,setdivsionDataRemove]=useState(false)

    const handleCode=(data)=>{
        setCode(data)
    }

    const handledivision =(data)=>{
        setDivisionCode(data)
    }

    const handleDepot=(data)=>{
        setDepotCode(data)
        setDataShow(true)
    }
  
    const thirdDataRemove=()=>{
        setdepotDataRemove(!depotDataRemove)
    }

    const secondDataremove=()=>{
        setdivsionDataRemove(!divisionDataRemove)
    }

    const productList=()=>{
        setDataShow(false)
    }

    return(
        <ApiiContext.Provider 
value={{code,handleCode,handledivision,divisionCode,handleDepot,DepotCode,DataShow,thirdDataRemove,depotDataRemove,secondDataremove,divisionDataRemove,productList}}>
            {children}
        </ApiiContext.Provider>
    )

}