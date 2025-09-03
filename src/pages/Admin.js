
import React, { useState } from "react";
import "./Admin.css";

function Admin({ foods, setFoods }) {
  const [newFood, setNewFood] = useState({ name: "", price: "", image: "" });
  const [error, setError] = useState("");
  const [editingFood, setEditingFood] = useState(null);

  
  const handleAddOrUpdate = () => {
    if (!newFood.name.trim() || !newFood.price || !newFood.image) {
      setError("⚠️ Please fill out all fields.");
      return;
    }

  
    const duplicate = foods.find(
      (food) =>
        food.name.toLowerCase() === newFood.name.toLowerCase() &&
        food.id !== (editingFood?.id || 0)
    );
    if (duplicate) {
      setError("⚠️ That food already exists!");
      return;
    }

    if (editingFood) {
      // Update existing
      setFoods(
        foods.map((food) =>
          food.id === editingFood.id
            ? { ...food, ...newFood, price: Number(newFood.price) }
            : food
        )
      );
      setEditingFood(null);
    } else {
      // Add new
      setFoods([
        ...foods,
        { id: Date.now(), ...newFood, price: Number(newFood.price) },
      ]);
    }

    setNewFood({ name: "", price: "", image: "" });
    setError("");
  };

  
  const handleDelete = (id) => {
    setFoods(foods.filter((food) => food.id !== id));
  };

  
  const handleEdit = (food) => {
    setEditingFood(food);
    setNewFood({ name: food.name, price: food.price, image: food.image });
    setError("");
  };

  return (
    <div className="admin modern-admin">
      <h2>🍴 Admin Portal</h2>
      <p className="admin-subtitle">
        Manage your menu items here — add, edit, or remove foods easily.
      </p>

      {/* Add / Update Form */}
      <div className="add-form">
        <input
          type="text"
          placeholder="Food Name"
          value={newFood.name}
          onChange={(e) => setNewFood({ ...newFood, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          value={newFood.price}
          onChange={(e) => setNewFood({ ...newFood, price: e.target.value })}
        />
        <input
          type="text"
          placeholder="Image URL (/images/food.jpg)"
          value={newFood.image}
          onChange={(e) => setNewFood({ ...newFood, image: e.target.value })}
        />
        <button className="add-btn" onClick={handleAddOrUpdate}>
          {editingFood ? "✅ Update Food" : "➕ Add Food"}
        </button>
      </div>

      {error && <p className="error-msg">{error}</p>}

      {/* Food List */}
      <div className="food-list">
        {foods.map((food) => (
          <div key={food.id} className="food-item">
            <img src={food.image} alt={food.name} className="food-img" />
            <h3>{food.name}</h3>
            <p className="food-price">₹{food.price}</p>
            <div className="admin-actions">
              <button className="edit-btn" onClick={() => handleEdit(food)}>
                ✏️ Edit
              </button>
              <button className="delete-btn" onClick={() => handleDelete(food.id)}>
                ❌ Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Admin;
