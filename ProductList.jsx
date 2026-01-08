// Suggested Data Structure
const plantsArray = [
  {
    category: "Air Purifying",
    plants: [
      { name: "Snake Plant", price: "$15", image: "url_here", description: "Produces oxygen at night." },
      { name: "Spider Plant", price: "$12", image: "url_here", description: "Filters formaldehyde and xylene." },
      { name: "Peace Lily", price: "$18", image: "url_here", description: "Removes mold spores from the air." }
    ]
  },
  {
    category: "Aromatic",
    plants: [
      { name: "Lavender", price: "$20", image: "url_here", description: "Calming scent to reduce stress." },
      { name: "Jasmine", price: "$22", image: "url_here", description: "Sweet fragrance that improves sleep." },
      { name: "Rosemary", price: "$14", image: "url_here", description: "Invigorating aroma, great for cooking." }
    ]
  }
];

// In your ProductList.jsx, map through categories first, then plants
return (
  <div className="product-grid">
    {plantsArray.map((categoryGroup, index) => (
      <div key={index}>
        <h1>{categoryGroup.category}</h1>
        <div className="plant-list">
          {categoryGroup.plants.map((plant, i) => (
            <PlantCard key={i} plant={plant} />
          ))}
        </div>
      </div>
    ))}
  </div>
);
