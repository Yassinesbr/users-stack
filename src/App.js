import { useState } from "react";

import axios from "axios";

const Value = () => {
  const [value, setValue] = useState(0);
  console.log(value);
  return (
    <p>
      <button onClick={() => setValue(value + 1)}>Increment</button>
      {value}
    </p>
  );
};

const Data = () => {
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);
  //https://randomuser.me/api
  const getData = () => {
    axios.get(`https://randomuser.me/api`).then((res) => {
      const persons = res.data;
      setData([persons]);
      setUsers([
        ...users,
        {
          name: persons.results.map((e) => {
            return e.name.first;
          }),
          pic: persons.results.map((e) => {
            return e.picture.thumbnail;
          }),
        },
      ]);
    });
  };

  return (
    <div className="App">
      <button onClick={getData}>Get data</button>
      <br /> <br />
      {users.map((element) => {
        return (
          <div key={element.name}>
            <img src={element.pic} alt="" /> {element.name}
          </div>
        );
      })}
      {console.log(users)}
    </div>
  );
};

function App() {
  return (
    <div>
      <Value />
      <Data />
    </div>
  );
}

export default App;
