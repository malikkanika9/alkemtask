import React from 'react'
import { useEffect } from 'react';
import { DataContext } from '../../Contexts/DataContext'
import axios from 'axios';
import {  useSelector } from "react-redux";
import { useState } from 'react';
import { ApiiContext } from '../context/Apicontext';

const ProductList = () => {
    const {dataShow} =React.useContext(ApiiContext);
    const { token } = useSelector((state) => state.token);
    const {code,handleDepot,divisionCode,DepotCode} = useContext(ApiiContext)
    const [list,setList]= useState("")

    const fetchData =()=>{
        axios
        .get(
          `https://alkemapi.indusnettechnologies.com/api/product/all_product_list/E/${Number(DepotCode)}?dist_id=${Number(code)}&page=${1}&sv=&div_code=${Number(divisionCode)}&product_nm=`,
          { headers: { Authorization: `bearer ${token}` } }
        )
        .then((res) => {
        setList(res.data.data)
        })
        .catch((error) => {
          console.log(error);
        });
    }
    useEffect(()=>{
        fetchData()
    },[dataShow,DepotCode])
  return (
    <div>
        {
            list && list.map(item=><div className="card m-2 w-100" key={Date.now()+Math.random()}>
            <div className="card-body">
              <div className='d-flex flex-row justify-content-around'>
                <h5 className='card-title'>{item.brand_name}</h5>
                <div>

                {item.product_name}
                </div>

              </div>
            </div>
          </div>)
        }
    </div>
  )
}

export default ProductList