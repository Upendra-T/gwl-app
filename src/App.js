import React from 'react';
import Flexi from './flexi';

const App = () => {
  const onFlexiSubmit = (formData) => {
    console.log('Form Data:', formData);
  };

  const flexiConfig = {
    items: [
      {
        "name": "person_name",
        "label": "Person's Name",
        "type": "TextField",
      },
      {
        "name": "states",
        "label": "Person's state",
        "type": "DropDown",
        "values": ["Maharashtra", "Kerala", "Tamil Nadu"],
      },
    ],
  };

  return <Flexi onSubmit={onFlexiSubmit} config={flexiConfig} />;
};

export default App;
