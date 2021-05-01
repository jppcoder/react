import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';

function ItemListContainer() {

	const [products, setProducts] = useState([])

	useEffect(() => {
		fetch("json/prod.json")
		.then(response => response.json())
		.then(datos => {
			setProducts(datos)
		})

	},[])

	

    return ( 
      <ItemList products={products} />
    );

    
 
}
export default ItemListContainer;