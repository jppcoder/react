import React from 'react';
import Item from './Item';



const ItemList = ({products}) => {
    

    return ( 
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 mt-5 mb-5"> 
      {products.map((item, index) =>
          <div key={item.id}>
          <Item  name={item.name} price={item.price} desc={item.desc}  img={item.img} stock={item.stock}/>       
          </div>
          )}
      </div>
    );
}

export default ItemList;