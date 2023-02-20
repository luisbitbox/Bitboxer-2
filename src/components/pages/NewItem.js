import React from 'react'
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';

export const NewItem = () => {

    const navigate = useNavigate();

    const saveItem = async (e) =>{
        e.preventDefault();

        const newItem = {
            itemCode: e.target.itemCode.value,
            description: e.target.description.value,
            price: e.target.price.value
        };

        try {
            const result = await axios.post("http://localhost:8080/erp/api/item", newItem);
            navigate(`/item`);// No se ejecuta
            return result;
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className='content'>
        <form className='w-25' onSubmit={saveItem}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Code</label>
                    <input type="text" className="form-control" id="" aria-describedby="emailHelp"  name="itemCode" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" name="description" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Price</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" name="price" />
                </div>

                <button type="submit" className="btn btn-primary">Save</button>
            </form>
    </div>
  )
}
