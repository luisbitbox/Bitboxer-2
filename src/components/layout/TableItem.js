import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { useNavigate } from "react-router-dom"
import axios from 'axios'


export const TableItem = ({itemFilter}) => {

    const [item, setItem] = useState([]);
    const navigate = useNavigate();


    useEffect(()=>{

        getItems();

    },[itemFilter]);

    const getItems = async() => {
        try{
            const result = await axios.get('http://localhost:8080/erp/api/item');

            if(itemFilter){
                setItem(result.data.filter((i) => i.state==="ACTIVE"));
            }else{
                setItem(result.data.filter((i) => i.state==="DISCONTINUED"));
            }
        }catch(error){
            console.log(error);
        }

    }

    const goToItemCard = (id) => {
        navigate(`/item/${id}`);
    }

    const goToNewItem = () => {
        navigate(`/newItem`);
    }

  return (
    <div>

        <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Code</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                        <th scope="col">Creation</th>
                        <th scope="col">Creator</th>
                        <th scope="col">State</th>
                    </tr>
                </thead>
                <tbody>
                    {item.map((i) => {
                        return (
                            <tr key={i.itemCode}  >
                                <td>{i.itemCode}</td>
                                <td>{i.description}</td>
                                <td>{i.price}</td>
                                <td>{i.creation}</td>
                                <td>{i.creator.username}</td>
                                <td>
                                    {console.log(i.state)}
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked={i.state === "ACTIVE"} readOnly/>
                                    </div>
                                </td>
                                <td>
                                    <button className='btn btn-outline-primary mx-3' onClick={(e) => goToItemCard(i.idItem)}>See</button>
                                </td>

                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <button type="submit" className="btn btn-primary" onClick={goToNewItem}>New</button>
    </div>
  )
}
