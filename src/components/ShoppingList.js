import React, { useState } from 'react';
import Item from './Item'; // Ensure the correct path for Item component

function ShoppingList() {
  // 3. Define a list of Japanese foods
  const foodItems = [
    { id: 1, name: 'Sushi', category: 'Japanese', description: 'Rice and seafood' },
    { id: 2, name: 'Ramen', category: 'Japanese', description: 'Noodle soup' },
    { id: 3, name: 'Tempura', category: 'Japanese', description: 'Fried vegetables or shrimp' },
    { id: 4, name: 'Sashimi', category: 'Japanese', description: 'Raw fish slices' },
    { id: 5, name: 'Takoyaki', category: 'Japanese', description: 'Octopus balls' },
  ];

  // 4. State for filtering by category
  const [selectedCategory, setSelectedCategory] = useState('All');

  // 5. Handle category change
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // 6. Filter the items based on selected category
  const filteredItems = foodItems.filter(item => {
    return selectedCategory === 'All' || item.category === selectedCategory;
  });

  return (
    <div>
      <h1>Shopping List</h1>
      {/* Category Filter */}
      <select onChange={handleCategoryChange}>
        <option value="All">All</option>
        <option value="Japanese">Japanese</option>
      </select>

      <ul>
        {filteredItems.map(item => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
