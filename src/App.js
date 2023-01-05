import React, { useState } from "react";
import "./App.css";

function App() {
  const [editAddress, setEditAddress] = useState();

  const [formData, setFormData] = useState("");
  const [outputData, setOutputData] = useState([]);

  const handleEvent = (event) => {
    event.preventDefault();

    setFormData({
      Name: "",
      Department: "",
      Age: "",
      EmailAddress: "",
      ContactNumber: "",
    });
    setOutputData([...outputData, formData]);
    console.log(outputData);
  };

  const inputEvent = (event) => {
    const { name, value } = event.target;

    if (editAddress != null) {
      let newArr = [...outputData];
      newArr[editAddress] = formData;
      console.log("this is", editAddress, formData);
      setOutputData(newArr);
      setEditAddress(null);
    } else {
      setFormData((preValue) => {
        return {
          ...preValue,
          [name]: value,
        };
      });
    }
  };

  const handleEdit = (id) => {
    const findValue = outputData.find((arrElem, index) => index === id);
    setFormData(findValue);
    setEditAddress(id);
  };

  const handleDelete = (id) => {
    setOutputData((oldItem) => {
      return oldItem.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <form className="container">
        <h1 className="text-center text-success mb-5">Customer Entry</h1>
        <input
          type="text"
          placeholder="Enter Name"
          value={formData.Name}
          name="Name"
          onChange={inputEvent}
        />
        <input
          type="text"
          placeholder="Enter Department"
          value={formData.Department}
          name="Department"
          onChange={inputEvent}
        />
        <input
          type="number"
          placeholder="Enter Age"
          value={formData.Age}
          name="Age"
          onChange={inputEvent}
        />
        <input
          type="email"
          placeholder="Enter Email address"
          value={formData.EmailAddress}
          name="EmailAddress"
          onChange={inputEvent}
        />
        <input
          type="number"
          placeholder="Enter Contact number"
          value={formData.ContactNumber}
          name="ContactNumber"
          onChange={inputEvent}
        />
        <button
          className="button-add bg-success text-white border-0"
          type="submit"
          onClick={handleEvent}
        >
          Submit
        </button>
      </form>

      {outputData.length > 0 ? (
        <table className="table table-success table-striped container">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Name</th>
              <th scope="col">Department</th>
              <th scope="col">Age</th>
              <th scope="col">Email address</th>
              <th scope="col">Contact number</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {outputData.map((val, id) => {
              return (
                <tr>
                  <td>{id + 1}</td>
                  <td>{val.Name}</td>
                  <td>{val.Department}</td>
                  <td>{val.Age}</td>
                  <td>{val.EmailAddress}</td>
                  <td>{val.ContactNumber}</td>

                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => handleEdit(id)}
                    >
                      <span className="material-symbols-outlined">edit</span>
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(id)}
                    >
                      <span className="material-symbols-outlined">delete</span>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : null}
    </>
  );
}

export default App;
