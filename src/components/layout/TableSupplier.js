import React, { useContext, useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { useNavigate, useParams, useLocation } from "react-router-dom"
import axios from 'axios'
import { ItemContext } from '../../helpers/ItemContext'

export const TableSupplier = () => {
    const [supplier, setSupplier] = useState([]);
    const navigate = useNavigate();
    const { item, setItem  } = useContext(ItemContext);
    const params = useParams();
    /* const location = useLocation();
    const isAvailable = location.state.isAvailable; */


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

    const goToItemCard = (id) => {
        const itemUpdated = {
            id: item.id,
            code: item.id,
            fechaAlta: item.id,
            fechaCreacion: item.id,
            suppliers: item.id,
            priceReductions: item.id,
        }
        setItem(itemUpdated);
        navigate(`/item${id}`);
    }

    
  return (
    <div>
        <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Country</th>
                        {params.selection &&
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
                                {params.selection &&
                                <td>
                                    <div>
                                        <button className="btn btn-primary" onClick={goToItemCard(item.id)}>Select</button>
                                    </div>
                                </td>
                                }
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            {!params.selection &&

                <button type="submit" className="btn btn-primary" onClick={goToNewSupplier}>New</button>

            }
            
    </div>
  )
}
