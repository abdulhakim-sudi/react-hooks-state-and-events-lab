import React, { useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const foodItems = [
    { id: 1, name: "Sushi", category: "Main" },
    { id: 2, name: "Ramen", category: "Main" },
    { id: 3, name: "Tempura", category: "Appetizer" },
    { id: 4, name: "Edamame", category: "Appetizer" },
    { id: 5, name: "Matcha Ice Cream", category: "Dessert" }
  ];

  const filteredItems = selectedCategory
    ? foodItems.filter(item => item.category === selectedCategory)
    : foodItems;

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <div className={`App ${darkMode ? "dark" : "light"}`}>
      <h1>Japanese Food Menu</h1>

      {/* Dark Mode Label and Button */}
      <p>
        Dark Mode:{" "}
        <button onClick={toggleDarkMode}>
          {darkMode ? "ON" : "OFF"}
        </button>
      </p>

      {/* Category Filter */}
      <select onChange={handleCategoryChange} value={selectedCategory}>
        <option value="">All Categories</option>
        <option value="Main">Main</option>
        <option value="Appetizer">Appetizer</option>
        <option value="Dessert">Dessert</option>
      </select>

      {/* Food List */}
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
