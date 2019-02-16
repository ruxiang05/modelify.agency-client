import React from 'react';
import PropTypes from 'prop-types';
import '../styles/job-card.scss';
import { ReactComponent as DateIcon } from '../assets/icons/calendar-day.svg';

const JobCard = ({
  title, date, address, description, pay, status,
}) => {
  const formatedDate = new Date(date).toLocaleDateString();
  return (
    <div className="job-card">
      <div className="job-card-header">
        <div className="job-card-header-date">
          <DateIcon />
          <p>{formatedDate}</p>
        </div>
        <p>
£
          {pay}
        </p>
      </div>
      <div className="job-card-content">
        <h2>{title}</h2>
        <p className="truncate">{address}</p>
        <p className="truncate">{description}</p>
      </div>
      <div className="job-card-footer">
        <p>{status.toUpperCase()}</p>
      </div>
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
