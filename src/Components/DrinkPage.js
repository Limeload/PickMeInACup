import React, { useEffect, useState } from "react";
import DrinkList from "./DrinkList";
import Container from 'react-bootstrap/Container';
import DrinkForm from "./DrinkForm";

function DrinkPage({searchString}) {
const [coffeeArray, setCoffeeArray] = useState([]);

useEffect(() => {
  fetch("http://localhost:3001/caffine")
  .then((response) => response.json())
  .then((data) => setCoffeeArray(data))
}, []);

const coffeeFiltered = coffeeArray.filter((item) =>
    item.title.toLowerCase().includes(searchString.toLowerCase())
  );

function handleAddDrink(newDrink) {
    setCoffeeArray([...coffeeArray, newDrink]);
  }

  function handleClick(addToCart) {
    fetch(`http://localhost:3001/caffine/${addToCart.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isFavorited: addToCart.isFavorited ? false : true,
      }),
    })
      .then((response) => response.json())
      .then((data) => updatedCoffeeList(data));
  }

  function updatedCoffeeList(updatedCoffeeList) {
    let newItem = coffeeArray.map((item) => {
      if (item.id === updatedCoffeeList.id) {
        return updatedCoffeeList;
      } else {
        return item;
      }
    });
    setCoffeeArray(newItem);
  }
  
return (
  <div>
    <br />
      <DrinkForm onAddDrink={handleAddDrink}/>
      <br />
      <Container className="d-flex justify-content-evenly" >
    <DrinkList coffeeArray={coffeeFiltered} handleClick={handleClick} />
    </Container>
  </div>
)
}

export default DrinkPage;