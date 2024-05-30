import React from 'react';

const ProductBased = ({ onBack }) => {
  return (
    <div className="p-6 border rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Product Based Reminders</h2>
      <button onClick={onBack} className="bg-green-600 text-white px-6 py-2 rounded-lg">
        Back
      </button>
    </div>
  );
};

export default ProductBased;
