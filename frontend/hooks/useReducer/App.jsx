import { useReducer } from "react";
import "./styles.css";

const countReducer = (state, action) => {
  switch (action.type) {
    case "incre":
      return state + 1;
    case "decre":
      return state - 1;
    default:
      return state;
  }
};

export default function App() {

  const initialState = 0;
  const [count, dispatch] = useReducer(countReducer, initialState);
  const handleState = (action) => {
    dispatch({ type: action });
  };
  return (
      <div className="App">
          <h1>Hello CodeSandbox</h1>
          <h2>Start editing to see some magic happen!</h2>
          <button onClick={handleOpenModal}>Open Modal</button>
          <div>{count}</div>
          <button onClick={() => handleState("incre")}>Increment</button>
          <button onClick={() => handleState("decre")}>Decrement</button>
      </div>
  );
}
