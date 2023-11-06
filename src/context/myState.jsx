/* eslint-disable react/prop-types */
import MyContext from "./myContext";

function MyState(props) {
  const state = {
    name: "Moksh",
    age: 18,
  };
  return (
    <MyContext.Provider value={state}>{props.children}</MyContext.Provider>
  );
}

export default MyState;
