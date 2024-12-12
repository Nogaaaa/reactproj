import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 2, description: "charger", quantity: 1, packed: false },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}
function Logo() {
  return <h1> Far Away</h1>;
}
function Form() {
  const [description, setDescription] = useState("");
  const [choice, setChoice] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return; //if there's no value wrote in the input field don't do any thing return

    const newItem = { description, choice, packed: false, id: Date.now() };
    console.log(newItem);

    setDescription(""); // those are when i submit let the selector and input text field back to their initial state default ?
    setChoice(1);
  }

  return (
    <form className="add-form" onSubmit={(e) => handleSubmit(e)}>
      <h3>What Do You Need For Your Trip?</h3>
      <select value={choice} onChange={(e) => setChoice(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="items..."
      ></input>
      <button>Add</button>
    </form>
  );
}
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.quantity} />
        ))}
      </ul>
    </div>
  );
}
function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity}
        {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>You Have X Items On Your List And You Already Packed X (X%)</em>
    </footer>
  );
}
