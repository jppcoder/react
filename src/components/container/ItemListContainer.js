import React, { useState } from 'react';
import { Item } from './Item';
import { Card, Button } from 'react-bootstrap';


const ItemListContainer = () => {
    
    const product = [{
        "id": 1,
        "name": "Pedestal Quad ",
        "desc": "Planifica tu futuro con profesionales, reduci al maximo los riesgos que tienen las start ups, maximiza tu potencial y controla tus debildades para alcanzar los objetivos deseados",
        "price": 5000,
        "img": "https://res.cloudinary.com/dhngiwzze/image/upload/v1619269885/quad_gkjgfb.jpg"
      }, {
        "id": 2,
        "name": "Combo Retro",
        "desc": "Este programa esta diseñado para pensarse a largo plazo, para que puedas hacer un plan para los objetivos que tenes a 10 años. En los cuales te vas a quedar con herramientas para una fácil toma decisiones, para saber claramente cuales cosas están alineadas con tu plan y cuales no, herramientas hard sobre management de negocios en general",
        "price": 900,
        "img":"https://res.cloudinary.com/dhngiwzze/image/upload/v1619269884/combo_ajm0bh.jpg"
      }, {
        "id": 3,
        "name": "Arcade FullSize",
        "desc": "Entender hacia dónde vamos en el mediano y largo plazo y qué esperamos encontrar en el camino hace más efectivo el recorrido y abre las puertas a más y mejores oportunidades. Te invitamos a descubrir los conceptos fundamentales de trabajar con un fin en la mente",
        "price": 5500,
        "img": "https://res.cloudinary.com/dhngiwzze/image/upload/v1619269883/arcade_chhjsp.jpg"
      },{
        "id": 4,
        "name": "Consola Mario 80cm",
        "desc": "Si sos emprendedor, profesional independiente o tenés un emprendimiento con tus socios y tenés claro que el éxito de tu negocio depende de vos, inscribite hoy mismo",
        "price": 8000,
        "img": "https://res.cloudinary.com/dhngiwzze/image/upload/v1619269884/consola2_jzxvvf.jpg"
      },{
        "id": 5,
        "name": "Consola Ryu 80cm",
        "desc": "Herramienta que te va a permitir recodificar tus creencias para poder vivr en abundancia y crear lo que queres para vos, para tu vida y para tu trabajo.",
        "price": 11000,
        "img": "https://res.cloudinary.com/dhngiwzze/image/upload/v1619269883/consola_uiej4x.jpg"
      },{
        "id": 6,
        "name": "Consola SM",
        "desc": "No puedes hacer todo, lo mejor es priorizar y armar un proceso",
        "price": 1500,
        "img": "https://res.cloudinary.com/dhngiwzze/image/upload/v1619270670/peque_k9pjm7.jpg"
      }
    ];
    


       

    return ( 
       <> 
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 mt-5"> 
            {product.map((item, index) =>
               <div className="col">
               <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                    {item.desc}
                  </Card.Text>
                  <Item />
                </Card.Body>
              </Card>  
              </div>
            )}
        </div>
        
        


        
       </> 
     );
}
 
export default ItemListContainer;