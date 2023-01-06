import React from "react";
import Form from 'react-bootstrap/Form';

function DrinkSearch({searchString, onChangeSearch}) {
    function handleChange(event) {
        onChangeSearch(event.target.value);
      }
  return (
    <div className="App">
        <Form className="d-flex">
            <Form.Control 
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchString}
              onChange={handleChange}
            />
          </Form>
  </div>
  )
}

export default DrinkSearch;