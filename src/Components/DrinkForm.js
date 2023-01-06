import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/esm/Form";

function DrinkForm({ onAddDrink }) {
  const [form, setForm] = useState({
    title : "",
    description : "",
    image: "",
  });

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit() {
    const newDrink = {
      title: form.title,
      description: form.description,
      image: form.image
    };
    fetch("http://localhost:3001/caffine", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newDrink),
    })
      .then((response) => response.json())
      .then(onAddDrink);
  }; 


    return (
    <div className="coffee-form">
      <h2>Add a New Drink</h2>
      <Form onSubmit={handleSubmit} className="form">
      <Form.Control placeholder="Type a name" name="title" value={form.title} onChange={handleChange}/>
    <h5> Describe your coffee </h5>
        <Form.Control name="description" onChange={handleChange} as="textarea" value={form.description} rows={2} />
      <h5> Upload an Image url </h5>
      <Form.Control placeholder="url" name="image" value={form.image} onChange={handleChange}/>
        <br />
        <Button variant="dark" type="submit">Upload</Button>
      </Form>
    </div>
  )
}

export default DrinkForm;