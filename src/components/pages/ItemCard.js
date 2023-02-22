import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';
import { ItemContext } from '../../helpers/ItemContext';


export const ItemCard = () => {
    const [checked, setChecked] = useState(false);

    const [item, setItem] = useState({});
    const { setGlobalItem  } = useContext(ItemContext);

    const [supplier, setSupplier] = useState([]);
    const [priceReduction, setpriceReduction] = useState([]);

    const params = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        getItem();
        getSuppliers();
        getPriceReductions();
    }, []);


    const getItem = async(req, res)=> {
        try {
            const result = await axios.get("http://localhost:8080/erp/api/item/" + params.id);
            setItem(result.data);
            setChecked(result.data.state)
        } catch (error) {
            console.log(error);
        }
    };


    const getSuppliers = async(req, res)=> {
        try {
            const result = await axios.get("http://localhost:8080/erp/api/item/" + params.id +"/suppliers");
            setSupplier(result.data);
        } catch (error) {
            console.log(error);
        }
    };
    
    
    const getPriceReductions = async(req, res)=> {
        try {
            const result = await axios.get("http://localhost:8080/erp/api/item/" + params.id +"/priceReductions");
            setpriceReduction(result.data);
            console.log(result.data);
        } catch (error) {
            console.log(error);
        }
    };

    const editItem = async (e) =>{
        e.preventDefault();

        const newItem = {
            description: e.target.description.value,
            price: e.target.price.value,
            state: checked,
            suppliers: supplier
        };

        try {
            const result = await axios.put("http://localhost:8080/erp/api/item/" + params.id, newItem);
            console.log(result.data);
            console.log(e.target.state.value);
            navigate(`/item`);
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (event) => {
        if(item){
            setChecked(event.target.checked);
        }
    }

    const goToSupplier = () => {
        setGlobalItem(item);
        navigate(`/supplier`);
    }
    
    const goToNewPriceReduction = () => {
        setGlobalItem(item);
        navigate(`/newPriceReduction`);
    }


  return (
    <div className='content'>
        <h1>Item Card</h1>

        <div className='item-card'>
            <div className='row'>
                <div className='card mb-5'>
                        <h5 className="card-header">Item Code: {item.itemCode}</h5>
                        <div className="card-body">
                            <h2 className="card-title">Description: {item.description}</h2>
                            <h2>Price: {item.price}</h2>
                            <h2>Creation: {item.creation}</h2>
                            <h2>Creator: {item.creator}</h2>
                        </div>
                </div>
                
            </div>

            <div className='row'>
                    <div className="col-sm-6">
                        <form className='w-25' onSubmit={editItem}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Code</label>
                                <input type="text" className="form-control" id="" aria-describedby="emailHelp" defaultValue={item.itemCode} name="itemCode" readOnly/>
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
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" name='state' checked={checked} onChange={handleChange} />
                                <label className="form-check-label" htmlFor="exampleCheck1">State</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Edit</button>
                        </form>
                    </div>
                    
                    <div className="col-sm-6">
                        <h2>Suppliers</h2>
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
                        <button type="submit" className="btn btn-primary" onClick={goToSupplier}>Add Supplier</button>
                    </div>

                    <div className="col-sm-6 element4">
                        <h2>Price reductions</h2>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Reduced price</th>
                                    <th scope="col">Start date</th>
                                    <th scope="col">End date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {priceReduction.map((pr) => {
                                    return (
                                        <tr key={pr.idPriceReduction}  >
                                            <td>{pr.reducedPrice}</td>
                                            <td>{pr.startDate}</td>
                                            <td>{pr.endDate}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                        <button type="submit" className="btn btn-primary" onClick={goToNewPriceReduction}>Add Price Reduction</button>
                </div>
                </div>

            
            </div>

        </div>
  )
}
