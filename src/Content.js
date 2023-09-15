import React from 'react'
import ItemList from './ItemList';

const Content = ({ items, handleCheck, handleDelete }) => {



    return (
        <>
            {items.length ? (
                <ItemList items={items} handleCheck={handleCheck} handleDelete={handleDelete}/>
            ) : (
                <p>your list is empty</p>
            )}
        </>
  )
}

export default Content;