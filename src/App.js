import Fruit from "../src/images/fruit.png";
import "./app.scss";
import { useState } from "react";
import MainBox from "./component/Mainbox/mainbox.component";

function App() {
  const [input, setInput] = useState({
    mainItem: "",
    itemPrice: "",
    category: "",
    description: "",
  });
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState(items);
  function handleChange(e) {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  }

  function addTask() {
    setItems((prevState) => {
      return [...prevState, input];
    });
    setFilteredItems((prevState) => {
      return [...prevState, input];
    });
    console.log(items);
  }

  function filterItems(category) {
    const filtered = items.filter((item) => item.category === category);
    setFilteredItems(filtered);
    console.log(filteredItems);
  }

  function submit(e) {
    e.preventDefault();
    addTask();
  }
  return (
    <div className="app-page">
      <div className={"background"} />
      <div>
        <div className={"yellow-background"}>
          <div className={"shopping-list"}>
            <p>Shopping</p>
            <p>List</p>
          </div>
        </div>
        <div className={"backdrop"}>
          <p>Welcome</p>
          <img alt="Fruit" src={Fruit} className={"fruit"} />
        </div>
        <div>
          <MainBox
            filter={filterItems}
            items={items}
            filtered={filteredItems}
            submit={submit}
            handleChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
