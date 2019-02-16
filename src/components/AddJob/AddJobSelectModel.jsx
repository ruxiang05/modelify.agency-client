import React from 'react';
import ModelList from '../ModelList';
import PageHeader from '../PageHeader';

const AddJobDetails = props => (
  <React.Fragment>
    <PageHeader title="Select Model" />
    <div className="page">
      <ModelList {...props} />
    </div>
  </React.Fragment>
);

export default AddJobDetails;
