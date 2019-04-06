/* Uses methods and/or components from react, react-router-dom and prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/job-card.scss';
import { ReactComponent as DateIcon } from '../assets/icons/calendar-day.svg';
import { ReactComponent as PoundIcon } from '../assets/icons/pound-sign.svg';
import { ReactComponent as LocationIcon } from '../assets/icons/map-marker-alt.svg';
import { ReactComponent as NoteIcon } from '../assets/icons/sticky-note.svg';

const JobCard = ({ job }) => {
  const {
    date, title, address, description, status, _id, pay,
  } = job;
  const formatedDate = new Date(date).toLocaleDateString();
  return (
    <Link
      to={{
        pathname: `/jobs/${_id}`,
        state: job,
      }}
    >
      <div className="job-card">
        <div className="job-card-header">
          <div>
            <DateIcon />
            <p>{formatedDate}</p>
          </div>
          <div>
            <PoundIcon />
            <p>{pay}</p>
          </div>
        </div>
        <div className="job-card-content">
          <h2>{title}</h2>
          <div>
            <LocationIcon />
            <p className="truncate">{address}</p>
          </div>
          <div>
            <NoteIcon />
            <p className="truncate">{description}</p>
          </div>
        </div>
        <div className="job-card-footer">
          <p>{status.toUpperCase()}</p>
        </div>
      </div>
    </Link>
  );
};

JobCard.propTypes = {
  job: PropTypes.shape({}).isRequired,
};

export default JobCard;
