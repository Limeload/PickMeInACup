import React from "react";
import DrinkCard from "./DrinkCard";
import Row from 'react-bootstrap/Row';


function DrinkList({coffeeArray , handleClick}) {
    const cards = coffeeArray.map((coffee) => (
        <DrinkCard 
        coffee={coffee}
        key={coffee.id}
        handleClick ={handleClick} />
    ));
    return  <Row xs={1} md={3} className="g-4">{cards}</Row>
     
}

export default DrinkList;