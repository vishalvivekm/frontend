import React, { useReducer } from "react";

const initialPerson = {
  name: "",
  age: "",
  city: "",
  email: "",
};
const inputElements = ["name", "email", "city", "age"];

const personReducer = (state, action) => {
  switch (action.type) {
    case "reset":
      return initialPerson;
    case "updateFields":
      return { ...state, [action.field]: action.value };
    default:
      throw new Error("unknown action type");
  }
};

const Person = () => {
  const [p, dispatch] = useReducer(personReducer, initialPerson);
  const handleUpdate = (field) => (event) => {
    dispatch({
      type: "updateFields",
      field: field,
      value: event.target.value,
    });
  };
  return (
    <>
      <div className="fields-grid">
        <div>Name: {p.name}</div>
        <div>Age: {p.age}</div>
        <div>City: {p.city}</div>
        <div>Email: {p.email}</div>
      </div>
      <h3>Update fields</h3>
      <div className="fields-grid">
        {inputElements.map((el) => {
          return (
            <input
              placeholder={`edit ${el}`}
              value={p[el]}
              type="text"
              onChange={handleUpdate(el)}
            />
          );
        })}
      </div>
      <button
        onClick={() => dispatch({ type: "reset" })}
        disabled={JSON.stringify(p) === JSON.stringify(initialPerson)}
      >
        Reset
      </button>
    </>
  );
};
export default Person;
