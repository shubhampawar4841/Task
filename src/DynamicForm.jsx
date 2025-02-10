import React, { useState, useEffect } from "react";

const fetchRandomValues = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        quantity: Math.floor(Math.random() * 10) + 1,
        price: Math.floor(Math.random() * 100) + 10,
        total: Math.floor(Math.random() * 500),
        profit: Math.floor(Math.random() * 200) + "%",
      });
    }, 1000);
  });
};

const DynamicForm = () => {
  const [values, setValues] = useState({ quantity: "", price: "", total: "", profit: "" });
  const [fromAPI, setFromAPI] = useState(true);

  useEffect(() => {
    fetchRandomValues().then((data) => {
      setValues(data);
      setFromAPI(true);
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFromAPI(false);

    setValues((prev) => {
      const updatedValues = { ...prev, [name]: value };
      
      if (name === "quantity" || name === "price") {
        updatedValues.total = updatedValues.quantity * updatedValues.price;
      }
      return updatedValues;
    });
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow rounded-lg">
      <h2 className="text-xl font-bold mb-4">Dynamic Form</h2>
      <div className="space-y-3">
        <label className="block">
          Quantity:
          <input
            type="number"
            name="quantity"
            value={values.quantity}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />
        </label>
        <label className="block">
          Price:
          <input
            type="number"
            name="price"
            value={values.price}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />
        </label>
        <label className="block">
          Total:
          <input
            type="number"
            name="total"
            value={values.total}
            readOnly
            className="border p-2 w-full bg-gray-100 rounded"
          />
        </label>
        <label className="block">
          Profit:
          <input
            type="text"
            name="profit"
            value={values.profit}
            onChange={handleChange}
            className="border p-2 w-full rounded"
          />
        </label>
      </div>
    </div>
  );
};

export default DynamicForm;
