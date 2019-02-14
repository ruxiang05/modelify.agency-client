import React from 'react';
import ModelList from '../ModelList';
import PageHeader from '../PageHeader';

const AddJobDetails = props => (
  <div className="page">
    <PageHeader title="Select Model" />
    <ModelList {...props} />
  </div>
);

export default AddJobDetails;
