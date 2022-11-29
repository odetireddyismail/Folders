import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
//import "./App.css";
import data from "./mock-data.json";
import ReadOnlyRow from "./ReadOnlyRow";
import Editable from "./Editable.js";
import './Product.css';

const App = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    catagory: "",
    product: "",
    quantity: "",
    uom: "",
  });

  const [editFormData, setEditFormData] = useState({
    catagory: "",
    product: "",
    quantity: "",
    uom: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);

  }; //close the handleAddFormChange

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };
  // close handleEditFormChange

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      catagory: addFormData.catagory,
      product: addFormData.product,
      quantity: addFormData.quantity,
      uom: addFormData.uom,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  }; 
  //close the handleAddFormSubmit

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      catagory: editFormData.catagory,
      product: editFormData.product,
      quantity: editFormData.quantity,
      uom: editFormData.uom,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  }; 
  //close the handleEditFormSubmit

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      catagory: contact.catagory,
      product: contact.product,
      quantity: contact.quantity,
      uom: contact.uom,
    };

    setEditFormData(formValues);
  }; 

  // close handleEditClick

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  //close handleCancelClick

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };
  // close handleDeleteClick

  return (
    <div className="app-container">
       <h2>Add a Contact</h2>
    <form onSubmit={handleAddFormSubmit}>
   
      <div id="in">
      
      <input
        type="text"
        name="catagory"
        required="required"
        placeholder="catagory ..."
        autocomplete="off" onChange={handleAddFormChange}
      />
      
      <input
        type="text"
        name="product"
        required="required"
        placeholder="product..."
        autocomplete="off" onChange={handleAddFormChange}
      />
      <input
        type="text"
        name="quantity"
        required="required"
        placeholder="quantity..."
        autocomplete="off" onChange={handleAddFormChange}
      />
      <input
        type="text"
        name="uom"
        required="required"
        placeholder="Enter an uom..."
        autocomplete="off" onChange={handleAddFormChange}
      />
      <button type="submit" id="add">Add</button>
      </div>
    </form>
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead  id="center">
            <tr>
              <th>Category</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>UOM</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact,key) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <Editable
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
          <button>button</button>
        </table>
       
      </form>
              
     
     
    </div>
  );
};

export default App;