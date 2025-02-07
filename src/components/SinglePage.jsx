
import React from "react";
import { useParams } from "react-router-dom";
import { newArrivals } from "./Home";

function SinglePage() {
    const{id} = useParams ();
    console.log("productlist", id);

    const card = newArrivals.find((card)=>card.id ==id);
 
    
    return (
        <div>
           <div><img src={card.image}/></div> 
           <div><b>{card.name}</b></div> 
           <div>{card.description}</div>
           <div><b>${card.price.from}-${card.price.to}</b></div>

        </div>
    )
}
export default SinglePage;