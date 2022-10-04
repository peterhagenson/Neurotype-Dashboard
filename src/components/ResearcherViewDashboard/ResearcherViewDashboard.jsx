import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import './ResearcherViewDashboard.css'

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function ResearcherView(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const clinicians = useSelector((store) => store.researcher.researcherReducer);
  const store = useSelector((store) => store.researcher.researcherInstReducer);

  const [heading, setHeading] = useState('Researcher Dashboard');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_CLINICIANS' });
  }, []);

  useEffect(() => {
    dispatch({ type: 'FETCH_RESEARCHERINST' });
  }, []);

  return (
    <div>
      <h1 className='centeredHeaders'>{heading}</h1>
      <h4>Institution: {store.name}</h4>
      <h2>Clinicians</h2>
      {clinicians.map(clinician => {
        return (
          <p>{clinician.username}</p>
        )
      })}
    </div>
  );
}

export default ResearcherView;
