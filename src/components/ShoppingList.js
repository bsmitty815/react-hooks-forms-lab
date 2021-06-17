import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";


function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
 //const [itemSearch, setItemSearch] = useState("");
  const [search, setSearch] = useState("");
  

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function searchItem(event) {
    setSearch(event.target.value)
  }

  const itemsToDisplay = items.filter((item) => {

      if (selectedCategory === "All" && search === "") { //show all items if statement
        return true;
      } else if (selectedCategory === "All") {
        return (item.name.toLowerCase().includes(search.toLowerCase()))
        //returns true if the item matches the letters of the input searched
      }

      return item.category === selectedCategory && item.name.toLowerCase().includes(search.toLowerCase());
      //returns true if the catergory matches the items category and the letters of the input searched are in the item name
  });

  return (
    <div className="ShoppingList">
      <ItemForm
      onItemFormSubmit={onItemFormSubmit}
      />
      <Filter
      search={search}
      onCategoryChange={handleCategoryChange}
      onSearchChange={searchItem}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
