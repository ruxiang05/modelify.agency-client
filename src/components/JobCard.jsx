import React from 'react';
import PropTypes from 'prop-types';
import '../styles/job-card.scss';

const JobCard = ({
  title, date, address, description, pay, status,
}) => {
  const formatedDate = new Date(date).toDateString();
  return (
    <div className="job-card">
      <div>{title}</div>
      <div>{formatedDate}</div>
      <div>{address}</div>
      <div>{description}</div>
      <div>{pay}</div>
      <div>{status}</div>
    </div>
  );
};

JobCard.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  pay: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default JobCard;
