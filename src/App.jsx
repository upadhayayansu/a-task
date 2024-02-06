import { useState } from "react";
import "./App.css";
import { Header } from "./components/header/header.component";
import { InputCard } from "./components/inputCard/inputCard.component";
import { Icon } from "./components/icon/icon.component";
function App() {
  const [list, setList] = useState([]);

  const addToList = (item) => {
    const newList = [...list];
    newList.push({
      id: Math.floor(Math.random() * 100),
      data: item,
    });
    setList(newList);
  };

  const handleDelete = (itemId) => {
    const updatedItems = list.filter((item) => item.id !== itemId);

    setList(updatedItems);
  };
  return (
    <>
      <Header />
      <InputCard onAdd={addToList} />

      {list.map((item) => (
        <Icon
          key={item.id}
          onDelete={handleDelete}
          text={item.data}
          id={item.id}
        />
      ))}
    </>
  );
}

export default App;
