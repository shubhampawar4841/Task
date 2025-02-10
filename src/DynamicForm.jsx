import React, { useState } from "react";

const DynamicForm = () => {
  const [formData, setFormData] = useState({ quantity: "", price: "", total: "", profit: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedData = { ...formData, [name]: value };

    if (name === "quantity" || name === "price") {
      updatedData.total = updatedData.quantity * updatedData.price || "";
    }

    setFormData(updatedData);
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Dynamic Form</h2>
      <label className="block mb-2">Quantity</label>
      <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} className="border p-2 w-full" />
      
      <label className="block mt-4 mb-2">Price</label>
      <input type="number" name="price" value={formData.price} onChange={handleChange} className="border p-2 w-full" />
      
      <label className="block mt-4 mb-2">Total</label>
      <input type="number" name="total" value={formData.total} className="border p-2 w-full" readOnly />
      
      <label className="block mt-4 mb-2">Profit</label>
      <input type="text" name="profit" value={formData.profit} onChange={handleChange} className="border p-2 w-full" />
    </div>
  );
};

export default DynamicForm;
