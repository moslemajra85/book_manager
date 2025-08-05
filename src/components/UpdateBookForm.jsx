import React from 'react'

const UpdateBookForm = () => {
  return (
    <div className="updatebook-form-container">
      <label htmlFor="update-title" className="updatebook-form-label">Title:</label>
      <input type="text" id="update-title" name="update-title" className="updatebook-form-input" />
      <button className="updatebook-form-btn">Save</button>
    </div>
  )
}

export default UpdateBookForm