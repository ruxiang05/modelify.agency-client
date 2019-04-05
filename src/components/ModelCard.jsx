import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/model-card.scss';
import { SelectModel } from '../contexts/selectModelContext';
import { ReactComponent as UnknownUserIcon } from '../assets/icons/user-circle.svg';

class ModelCard extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { model } = this.props;
    const { email } = model;
    const { selectModel } = this.context;
    selectModel(email);
  }

  render() {
    const { model } = this.props;
    const { name, _id } = model;
    const { selectModel } = this.context;
    const cardContent = (
      <div className="model-card">
        <UnknownUserIcon />
        <p>{name}</p>
      </div>
    );
    return (
      <React.Fragment>
        {selectModel.length ? (
          <button
            className="model-card-action"
            type="submit"
            onClick={this.handleClick}
          >
            {cardContent}
          </button>
        ) : (
          <Link
            to={{
              pathname: `/models/${_id}`,
              state: model,
            }}
          >
            {cardContent}
          </Link>
        )}
      </React.Fragment>
    );
  }
}

ModelCard.contextType = SelectModel;

ModelCard.propTypes = {
  model: PropTypes.object.isRequired,
};
export default ModelCard;
