import React from 'react'
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';

export const NewSupplier = () => {

    const navigate = useNavigate();

    const saveSupplier = async (e) =>{
        e.preventDefault();

        const supplier = {
            name: e.target.name.value,
            country: e.target.country.value,
        };

        // Verifica si alguno de los campos está vacío
        if(!supplier.name || !supplier.country){
            alert("Los campos no pueden estar vacíos")
            return
          }
        try {
            const result = await axios.post("http://localhost:8080/erp/api/supplier", supplier);
            navigate(`/supplier`);
            return result;
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className='content'>
        <form className='w-25' onSubmit={saveSupplier}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="" aria-describedby="emailHelp"  name="name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Country</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" name="country" />
                </div>

                <button type="submit" className="btn btn-primary">Save</button>
            </form>
    </div>
  )
}
