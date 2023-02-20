import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';

export const ItemCard = () => {
    const [checked, setChecked] = useState(false);
    const [item, setItem] = useState({});
    const [supplier, setSupplier] = useState([]);
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getItem();
    }, []);

    const getItem = async(req, res)=> {
        try {
            const result = await axios.get("http://localhost:8080/erp/api/item/" + params.id);
            setItem(result.data);
        } catch (error) {
            console.log(error);
        }
    };

    const editItem = async (e) =>{
        e.preventDefault();

        const newItem = {
            description: e.target.description.value,
            price: e.target.price.value,
            active: checked
        };

        try {
            const result = await axios.put("http://localhost:8080/erp/api/item/" + params.id, newItem);
            console.log(result.data);
            console.log(e.target.active.value);
            navigate(`/item`);
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (event) => {
        setChecked(event.target.checked);
    }


  return (
    <div className='item-card'>
            <h1>Item Card</h1>
            <div className='card mb-5'>
                <div className="card">
                    <h5 className="card-header">Item Code: {item.itemCode}</h5>
                    <div className="card-body">
                        <h5 className="card-title">Description: {item.description}</h5>
                        <h2>Price: {item.price}</h2>
                        <h2>Creation: {item.creation}</h2>
                        <h2>Creator: {item.creator}</h2>
                        {
                        item.supplier.map((sup) => {
                            return (
                                <div className="card mx-2 w-50 mb-2 p-3 bg-warning">
                                    <h5 className="card-title">Item Name: {sup.name}</h5>
                                    <h5 className="card-title">Item price: {sup.country}</h5>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            </div>

            <form className='w-25' onSubmit={editItem}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Code</label>
                    <input type="text" className="form-control" id="" aria-describedby="emailHelp" defaultValue={item.itemCode} name="name" readOnly/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" defaultValue={item.description} name="description" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" defaultValue={item.price} name="price" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Creation</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" defaultValue={item.creation} name="creation" readOnly/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" name='active' checked={checked} onChange={handleChange} />
                    <label className="form-check-label" htmlFor="exampleCheck1">Active</label>
                </div>
                <button type="submit" className="btn btn-primary">Edit</button>
            </form>
        </div>
  )
}
