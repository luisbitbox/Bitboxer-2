import React, { useContext, useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { MiContexto } from '../../helpers/MiContexto'

export const TableSupplier = () => {
    const [supplier, setSupplier] = useState([]);
    const navigate = useNavigate();
    const { valor, actualizarValor } = useContext(MiContexto);


    useEffect(()=>{
        console.log(valor);
        getSuppliers();

    },[]);

    const getSuppliers = async() => {
        try{
            const result = await axios.get('http://localhost:8080/erp/api/supplier');
            setSupplier(result.data);
        }catch(error){
            console.log(error);
        }

    }


    const goToNewSupplier = () => {
        navigate(`/newSupplier`);

    }
  return (
    <div>
        <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Country</th>
                    </tr>
                </thead>
                <tbody>
                    {supplier.map((s) => {
                        return (
                            <tr key={s.idSupplier}  >
                                <td>{s.name}</td>
                                <td>{s.country}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <button type="submit" className="btn btn-primary" onClick={goToNewSupplier}>New</button>
            
    </div>
  )
}
