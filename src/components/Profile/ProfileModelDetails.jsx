import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/profile-model-details.scss';

const ProfileModelDetails = ({ user }) => {
  const { characteristics, measurements } = user.modelInfo;
  const { eyes, skin, hair } = characteristics;
  const {
    chest, waist, hips, height, weight,
  } = measurements;
  return (
    <div className="profile-model-details">
      <h2>Characteristics</h2>
      <ul className="characteristics">
        <li>
            Eyes
          <span>{eyes}</span>
        </li>
        <li>
            Hair
          <span>{hair}</span>
        </li>
        <li>
            Skin
          <span>{skin}</span>
        </li>
      </ul>
      <h2>Measurements</h2>
      <ul className="measurements">
        <div>
          <li>
            Height
            <span>{height}</span>
          </li>
          <li>
            Weight
            <span>{weight}</span>
          </li>
        </div>
        <div>
          <li>
        Chest
            <span>{chest}</span>
          </li>
          <li>
            Waist
            <span>
              {waist}
            </span>
          </li>
          <li>
        Hips
            <span>{hips}</span>
          </li>
        </div>
      </ul>
      <p className="disclosure">Measurements are in cm</p>
    </div>
  );
};

ProfileModelDetails.propTypes = {
  user: PropTypes.shape({}).isRequired,
};

export default ProfileModelDetails;
