import React from 'react'
import { TableItem } from '../layout/TableItem'

export const Item = ({ itemFilter }) => {
  return (
    <div className='content'>
        <h1>Items</h1>
        <TableItem itemFilter={itemFilter}></TableItem>
    </div>
  )
}
