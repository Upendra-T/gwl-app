import React, { useState } from 'react';
import './style.css';

const Flexi = ({ config, onSubmit }) => {
  const [formData, setFormData] = useState({});
  const [showFormData, setShowFormData] = useState(false);
  const [submittedFormData, setSubmittedFormData] = useState({});

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({...prevData,
      [name]: value,
    }));
  };

  const renderFormItem = (item) => {
    switch (item.type) {
      case 'TextField':
        return (
          <div key={item.name} className="form-item">
            <label className="form-label">{item.label}:</label>
            <input
              type="text"
              value={formData[item.name] || ''}
              onChange={(e) => handleInputChange(item.name, e.target.value)}
              className="form-input"
            />
          </div>
        );

      case 'DropDown':
        return (
          <div key={item.name} className="form-item">
            <label className="form-label">{item.label}:</label>
            <select value={formData[item.name] || ''}
              onChange={(e) => handleInputChange(item.name, e.target.value)}
              className="form-input" >
              <option value="">Select...</option>
              {item.values.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        );

      default:
        return null;
    }
  };

  const renderForm = (configItems) => {
    return configItems.map((item) => (
      <React.Fragment key={item.name}>
        {renderFormItem(item)}
        {item.items && renderForm(item.items)}
      </React.Fragment>
    ));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.person_name) {
      alert('Please enter a name!');
      return; 
    }
    setSubmittedFormData({ ...formData }); 
    setShowFormData(true); 
    onSubmit(formData); 
  };

  return (
    <div className="flexi-container">
      <h1>Welcome</h1>
      <form onSubmit={handleSubmit}>
        {renderForm(config.items)}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>

      {showFormData && (
        <div className="form-data">
          <h2>Form Data:</h2>
          <p>Submitted Name: "{submittedFormData.person_name}"</p>
          <p>Submitted State: "{submittedFormData.states}"</p>
          <h6>**find data logs in console**</h6>
        </div>
      )}
    </div>
  );
};

export default Flexi;
