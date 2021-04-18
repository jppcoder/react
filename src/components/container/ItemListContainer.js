import React, { useState } from 'react';

const ItemListContainer = (props) => {
    return ( 
        <div className={props.className}> {props.text}</div>
     );
}
 
export default ItemListContainer;