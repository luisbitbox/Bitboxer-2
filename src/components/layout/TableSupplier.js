import React, { useContext, useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { ItemContext } from '../../helpers/ItemContext'
import { DesactivationContext } from '../../helpers/DesactivationContext'

export const TableSupplier = () => {
    const [supplier, setSupplier] = useState([]);
    const navigate = useNavigate();

    const { globalItem } = useContext(ItemContext);
    const {globalAction} = useContext(DesactivationContext);


    useEffect(()=>{
        getSuppliers();
    },[]);

    const getSuppliers = async() => {
        try{
            const result = await axios.get('http://localhost:8080/erp/api/supplier', {
                headers: {
                    username: "Pedro",
                    password: "admin"
                }
            });
            setSupplier(result.data);
        }catch(error){
            console.log(error);
        }
    }


    const goToNewSupplier = () => {
        navigate(`/newSupplier`);
    }

    const goToItemCard = (id, supplier) => {
        addSupplier(supplier);
        navigate(`/item/${id}`);
    }

    const addSupplier = async (supplier) => {
        try{
            await axios.put(`http://localhost:8080/erp/api/item/${globalItem.idItem}/addSupplier`, supplier);
        }catch(error){
            console.log(error);
        }
    }

    
  return (
    <div>
        <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Country</th>
                        {globalAction.active &&
                            <th scope="col">Select</th>    
                        }
                    </tr>
                </thead>
                <tbody>
                    {supplier.map((s) => {
                        return (
                            <tr key={s.idSupplier}  >
                                <td>{s.name}</td>
                                <td>{s.country}</td>
                                {globalAction.active &&
                                    <td>
                                        <div>
                                            <button className="btn btn-primary" onClick={() => goToItemCard(globalItem.idItem, s)}>Select</button>
                                        </div>
                                    </td>
                                }
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <button type="submit" className="btn btn-primary" onClick={goToNewSupplier}>New</button>
            
    </div>
  )
}
