import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { useNavigate } from "react-router-dom"
import axios from 'axios'


export const TableItem = () => {

    const [item, setItem] = useState([]);
    const navigate = useNavigate();


    useEffect(()=>{

        getItems();

    },[]);

    const getItems = async() => {
        try{
            const result = await axios.get('http://localhost:8080/erp/api/item', {
                headers: {
                    username: "Luis",
                    password: "user"
                }
            });
            setItem(result.data);
        }catch(error){
            console.log(error);
        }

    }

    const goToItemCard = (id) => {
        navigate(`/item/${id}`);
    }

    const goToNewItem = (id) => {
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
                                <td>{i.creator}</td>
                                <td>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked={i.state} readOnly/>
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
