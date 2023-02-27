import React, {useContext, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
//import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'
import { ItemContext } from '../../helpers/ItemContext'

export const NewPriceReduction = () => {

    const navigate = useNavigate();
    const { globalItem } = useContext(ItemContext);
    const [priceReduction, setpriceReduction] = useState([]);

    useEffect(()=>{
        getPriceReductions();
    }, []);

    const getPriceReductions = async(req, res)=> {
        try {
            const result = await axios.get("http://localhost:8080/erp/api/priceReduction");
            setpriceReduction(result.data);
            console.log(result.data);
        } catch (error) {
            console.log(error);
        }
    };

    const newPriceReduction = async (e) =>{
        e.preventDefault();

        const newPriceReduction = {
            reducedPrice: e.target.elements.reducedPrice.value,
            startDate: new Date(e.target.elements.startDate.value),
            endDate: new Date(e.target.elements.endDate.value)
        };

        // Verifica si alguno de los campos está vacío
        if(!newPriceReduction.reducedPrice || newPriceReduction.startDate===null || newPriceReduction.endDate===null){
            alert("Los campos no pueden estar vacíos")
            return
        }

        try {
            const result = await axios.post(`http://localhost:8080/erp/api/priceReduction`, newPriceReduction);
            getPriceReductions();
            return result;
        } catch (error) {
            console.log(error);
        }
    }

    const addPriceReductionToItem = async(id) => {
        try {
            console.log(priceReduction.idPriceReduction);
            await axios.put(`http://localhost:8080/erp/api/priceReduction/${id}/item`, globalItem);
            console.log(priceReduction);
            
            navigate(`/item/${globalItem.idItem}`);
        } catch (error) {
            console.log(error);
        }
    }

    const deleteItem = async(id) => {
        try {
            const result = await axios.delete(`http://localhost:8080/erp/api/priceReduction/${id}`);
            
            return result;
        } catch (error) {
            console.log(error);
        }
    }



  return (
    <div className='content'>
        <div className='principal'>

            <form className='w-25' onSubmit={newPriceReduction}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Reduced price</label>
                    <input type="text" className="form-control" id="" aria-describedby="emailHelp"  name="reducedPrice" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Start Date</label>
                    <input type="date" className="form-control" id="exampleInputEmail1" name="startDate" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">End Date</label>
                    <input type="date" className="form-control" id="exampleInputEmail1" name="endDate" />
                </div>

                <button type="submit" className="btn btn-primary">New</button>
            </form>
            <div className="col-sm-6 element4 tablaPriceRed">
                    <h2>Price reductions</h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Reduced price</th>
                                <th scope="col">Start date</th>
                                <th scope="col">End date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {priceReduction.map((pr) => {
                                return (
                                    <tr key={pr.idPriceReduction}  >
                                        <td>{pr.idPriceReduction}</td>
                                        <td>{pr.reducedPrice}</td>
                                        <td>{pr.startDate}</td>
                                        <td>{pr.endDate}</td>
                                        <td>
                                            <div className='filaTablaBtn'>
                                                <button className="btn btn-primary btnFila" onClick={(e) => addPriceReductionToItem(pr.idPriceReduction)}>Select</button>
                                                <button className="btn btn-danger" onClick={(e) => deleteItem(pr.idPriceReduction)}>Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
            </div>
        </div>
    </div>
  )
}
