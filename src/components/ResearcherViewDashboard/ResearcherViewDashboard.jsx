import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import './ResearcherViewDashboard.css'

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function ResearcherView(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store.user);
  const [heading, setHeading] = useState('Researcher Dashboard');

  return (
    <div>
      <h1 className='centeredHeaders'>{heading}</h1>
      <h4>Institution: {store.username}</h4>
      <h2>Clinicians</h2>
      {/* {store.map(clinician => {
        
      })} */}
    </div>
  );
}

export default ResearcherView;
