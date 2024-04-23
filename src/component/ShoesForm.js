import React from 'react';

export default function ShoesForm() {
  return (
    <div className="form-container">
      <form className="horizontal-form">
        <div className="form-row">
          <label>Shoes Name:</label>
          <input type='text'/>
        </div>
        
        <div className="form-row">
          <label>Description:</label>
          <input type='text'/>
        </div>

        <div className="form-row">
          <label>Price:</label>
          <input type='number'/>
        </div>

        <div className="form-row">
          <label>Quantity Available (L):</label>
          <input type='number'/>
        </div>

        <div className="form-row">
          <label>Quantity Available (M):</label>
          <input type='number'/>
        </div>

        <div className="form-row">
          <label>Quantity Available (S):</label>
          <input type='number'/>
        </div>

        <button>Add Product</button>
      </form>
    </div>
  );
}
