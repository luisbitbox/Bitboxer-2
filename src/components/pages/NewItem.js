import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';
import { UserContext } from '../../helpers/UserContext';

export const NewItem = () => {

    const navigate = useNavigate();
    const {globalUser} = useContext(UserContext);


    const saveItem = async (e) =>{
        e.preventDefault();
      
        const item = {
          itemCode: e.target.itemCode.value,
          description: e.target.description.value,
          price: e.target.price.value,
        };
      
        // Verifica si el código de artículo ya existe en el almacenamiento local
        if(item.itemCode === localStorage.getItem("itemCode")){
          alert("El código no puede estar repetido")
          return
        }
      
        // Verifica si alguno de los campos está vacío
        if(!item.itemCode || !item.description || !item.price){
          alert("Los campos no pueden estar vacíos")
          return
        }
      
        // Guarda el código del artículo en el almacenamiento local
        localStorage.setItem('itemCode', item.itemCode);
      
        try {
          // Hace una solicitud POST al servidor para guardar el artículo
          const result = await axios.post("http://localhost:8080/erp/api/item", item);
          
          const idItem = result.data.idItem;
          console.log(globalUser);

          await axios.put(`http://localhost:8080/erp/api/item/${idItem}/addCreator`, globalUser);
          navigate(`/item`);

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
